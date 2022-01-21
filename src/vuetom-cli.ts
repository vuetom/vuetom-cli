#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

program
  .version(require('../package').version)
  .usage('<command> [options]')
  // .option('-i, init [name]', 'init vitepress-theme-vuetom theme')
  .command('init', 'generate a new project from a template')
  .command('list', 'list available official templates')

// program
//   .command('list', 'list desc')
//   .action(function () {
//     list()
//   })

// program
//   .command('init', 'init desc')
//   .action(function () {
//     init()
//   })

/**
 * Help
 */
program.on('--help', () => {
  console.log('  Examples:')
  console.log()
  console.log(chalk.gray('    # create a new project with an official template'))
  console.log('    $ vuetom-cli init project-name')
  console.log()
  console.log(chalk.gray('    # show github template list'))
  console.log('    $ vuetom-cli list')
  console.log()
})

// function help () {
//   program.parse(process.argv)
//   if (program.args.length < 1) return program.help()
// }
// help()

program.parse(process.argv)

export {}
