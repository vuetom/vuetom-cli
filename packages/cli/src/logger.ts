const chalk = require('chalk')
const format = require('util').format
const t = require('./lang').t

/**
 * Prefix
 */
const ERROR_PRE = t('info.error')
const SUCCESS_PRE = t('info.success')
const sep = chalk.gray('·')

/**
 * Log a `message` to the console.
 */
exports.log = function (...args: any[]) {
  const msg = format.apply(format, args)
  console.log(chalk.white(''), sep, msg)
}

/**
 * Log an error `message` to the console and exit.
 */
exports.fatal = function (...args: any[]) {
  if (args[0] instanceof Error) args[0] = args[0].message.trim()
  const msg = format.apply(format, args)
  console.error(chalk.red(''), sep, msg)
  process.exit(1)
}

/**
 * Log a success `message` prefix is Success green color
 */
exports.success = function (...args: any[]) {
  const msg = format.apply(format, args)
  console.log(chalk.green(SUCCESS_PRE), sep, msg)
}

/**
 * Log a error `message` prefix is Error red color
 */
exports.error = function (...args: any[]) {
  const msg = format.apply(format, args)
  console.log(chalk.red(ERROR_PRE), sep, msg)
}

export {}
