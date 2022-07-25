const ora = require('ora')
const spinner = ora('Loading')

/**
 * args [color, text]
 */
exports.conf = function (...args: string[]) {
  const color = args[0] || 'yellow'
  const text = args[1] || 'Loading'
  spinner.color = color
  spinner.text = text
}

/**
 * start
 */
exports.start = function (...args: string[]) {
  spinner.start()
  this.conf(...args)
}

/**
 * stop
 */
exports.stop = function () {
  spinner.stop()
}

export {}
