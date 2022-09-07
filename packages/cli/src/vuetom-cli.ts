#!/usr/bin/env node

const { Command } = require('commander')
const chalk = require('chalk')
const pkg = require('../package')
const program = new Command()

program
  .name(pkg.name)
  .description(chalk.hex('#FCD34D')(pkg.description))
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

/**
 * command help
 *
 * eg.
 * --help
 * help git
 */
program
  .helpOption('-h, --help', chalk.gray('display help for you'))
  .addHelpCommand(true, chalk.gray('display help for command'))
  .on('--help', () => require('./cmd/help').default())

/**
 * option lang
 *
 * eg.
 * -l zh
 * --lang zhTW
 */
program
  .option('-l, --lang [language]', chalk.gray('change language'))
  .action((options: { lang: string }) => {
    const { lang } = options
    require('./cmd/lang').default(lang)
  })

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
  .action((user: string, type: string) => {
    require('./cmd/git').default(user, type)
  })

/**
 * command ver
 *
 * eg.
 * ver
 * ver -t blog
 * ver -a
 */
program
  .command('ver')
  .description(chalk.gray('show the theme/templates versions'))
  .option('-t, --temp <temp>', 'template version', 'ALL')
  .option('-a, --all', 'show all info', false)
  .action((options: { temp: string; list: boolean }) => {
    const { temp, list } = options
    require('./cmd/ver').default(temp, list)
  })

program.showHelpAfterError()

program.exitOverride()

try {
  program.parse(process.argv)
  const args = program.args
  const options = program.opts()
  const optionArr = Object.keys(options)
  if (optionArr.length === 0 && args.length == 0) {
    program.error(chalk.hex('#F87171')('Welcome To Vuetom Cli'), {
      exitCode: 2,
      code: 'no.options'
    })
  }
} catch (err) {
  // exitCode: 1 2
}

export {}
