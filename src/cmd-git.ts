const logger = require('./logger')
const request = require('request')
const chalk = require('chalk')

function githubList (user: string) {
  request({
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'element-plus'
    }
  }, (err: any, res: any, body: any) => {
    if (err) logger.fatal(err)
    const requestBody = JSON.parse(body)
    if (Array.isArray(requestBody)) {
      console.log(`  ${user}'s repo list:`)
      console.log()
      requestBody.forEach(repo => {
        console.log(
          '  ' + chalk.hex('#FFC0CB')('★') +
          '  ' + chalk.hex('#00FFFF')(repo.name) +
          ' - ' + repo.description)
      })
    } else {
      console.error(requestBody.message)
    }
    console.log()
  })
}

function giteeList (user: string) {
  console.log('  sorry, nothing')
}

function handleGit (user: string, type: string) {
  if (type === undefined || type === 'github') {
    githubList(user ?? 'lauset')
  } else if (type === 'gitee') {
    giteeList(user ?? 'lauset')
  } else {
    console.log()
    console.log(chalk.red('  Type must be "gitHub" or "gitee"'))
    console.log()
  }
}

export default handleGit
