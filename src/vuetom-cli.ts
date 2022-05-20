#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

program
  .version(require('../package').version)
  .usage('<command> [options]')
  // .option('-i, init [name]', 'init vitepress-theme-vuetom theme')
  .command('init <project-name>', 'generate a new project from a template')
  .command('list [branch]', 'list available official templates by branch')

program
  .command('git <user> [type]')
  .description('show the list of github repository of a user')
  .action((user: any, type: any) => {
    require('./cmd-git').default(user, type)
  })

program.on('--help', () => {
  console.log('  Examples:')
  console.log()
  console.log(chalk.gray('    # create a new project with an official template'))
  console.log('    $ vuetom-cli init project-name')
  console.log()
  console.log(chalk.gray('    # show github branch information'))
  console.log('    $ vuetom-cli list temp-docs')
  console.log()
  console.log(chalk.gray('    # show github repository'))
  console.log('    $ vuetom-cli git vuejs')
  console.log()
})

program.parse(process.argv)

export {}
