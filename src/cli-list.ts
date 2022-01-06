#!/usr/bin/env node

const logger = require('./logger')
const request = require('request')
const chalk = require('chalk')

/**
 * Exit
 */
process.on('exit', () => {
  console.log()
  // console.log(chalk.hex('#FFC0CB')('  Command \'list\' execution completed'))
  console.log()
})

request({
  url: 'https://api.github.com/users/lauset/repos',
  headers: {
    'User-Agent': 'element-plus'
  }
}, (err: any, res: any, body: any) => {
  if (err) logger.fatal(err)
  const requestBody = JSON.parse(body)
  if (Array.isArray(requestBody)) {
    console.log('  Available official templates:')
    console.log()
    requestBody.forEach(repo => {
      console.log(
        '  ' + chalk.hex('#FFC0CB')('★') +
        '  ' + chalk.blue(repo.name) +
        ' - ' + repo.description)
    })
  } else {
    console.error(requestBody.message)
  }
})

export {}
