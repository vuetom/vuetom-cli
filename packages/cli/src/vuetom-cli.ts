#!/usr/bin/env node

// const program = require('commander')
const chalk = require('chalk')
const pkg = require('../package')

import { Command } from 'commander'
const program = new Command()

program
  .name(pkg.name)
  .description(chalk.hex('#FA8072')(pkg.description))
  .version(pkg.version, '-v, --vers', chalk.gray('output the current version'))

program
  .usage('<command> [options]')
  // .option('-i, init [name]', 'init vitepress-theme-vuetom theme')
  .command(
    'init <project-name>',
    chalk.gray('generate a new project from a template')
  )
  .command(
    'list [branch]',
    chalk.gray('list available official templates by branch')
  )

program
  .helpOption('-h, --help', chalk.gray('display help for you'))
  .addHelpCommand(true, chalk.gray('display help for command'))

/**
 * command git
 *
 * eg.
 * git lauset github
 * git vuetom
 */
program
  .command('git')
  .description(chalk.gray('show the list of github/gitee repository of a user'))
  .argument('<user>', "your github/gitee 's username")
  .argument('[type]', 'repo type: "github" or "gitee"', undefined)
  .action((user, type) => {
    require('./cmd-git').default(user, type)
  })

/**
 * command ver
 *
 * eg.
 * ver
 * ver -t blog
 * ver -l
 */
program
  .command('ver')
  .description(chalk.gray('show the theme/templates versions'))
  .option('-t, --temp <temp>', 'template version', 'ALL')
  .option('-l, --list', 'show more info', false)
  .action((options, command) => {
    const { temp, list } = options
    require('./cmd-ver').default(temp, list)
  })

program.on('--help', () => {
  console.log()
  console.log(chalk.hex('#66CDAA')('  Examples:'))
  console.log()
  console.log(
    chalk.gray('    # create a new project with an official template')
  )
  console.log('    $ vuetom-cli init project-name')
  console.log()
  console.log(chalk.gray('    # show github branch information'))
  console.log('    $ vuetom-cli list temp-docs')
  console.log()
  console.log(chalk.gray('    # show github repository'))
  console.log('    $ vuetom-cli git vuejs')
  console.log()
})

program.showHelpAfterError()

program.exitOverride()

try {
  program.parse(process.argv)
} catch (err) {
  // exitCode: 1
}

export {}
