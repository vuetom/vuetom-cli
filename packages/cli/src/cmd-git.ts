const logger = require('./logger')
const request = require('request')
const chalk = require('chalk')
const spinner = require('./spinner')

const GITEE_URL = 'https://gitee.com/api/v5/users'
const GITHUB_URL = 'https://api.github.com/users'

function req (url: string, type: string) {
  spinner.start()
  request(
    { url, headers: { 'User-Agent': '' }},
    (err: any, res: any, body: any) => {
      spinner.stop()
      if (err) logger.fatal(err)
      const requestBody = JSON.parse(body)
      if (Array.isArray(requestBody)) {
        logger.success(`${type} reop list: \n`)
        requestBody.forEach((repo) => {
          console.log(
            '  ' +
              chalk.hex('#FFC0CB')('★') +
              '  ' +
              chalk.hex('#00FFFF')(repo.name) +
              ' - ' +
              repo.description
          )
        })
      } else {
        logger.error(requestBody.message)
      }
      console.log()
    }
  )
}

function githubList (user: string, type: string) {
  const url = `${GITHUB_URL}/${user}/repos`
  req(url, type)
}

function giteeList (user: string, type: string) {
  const url = `${GITEE_URL}/${user}/repos`
  req(url, type)
}

function handleGit (user: string, type: string) {
  if (type === undefined || type === 'github') {
    type = `${user}'s github`
    githubList(user ?? 'lauset', type)
  } else if (type === 'gitee') {
    type = `${user}'s gitee `
    giteeList(user ?? 'lauset', type)
  } else {
    logger.error(
      `"${type}" is not allowed! Type must be "github" or "gitee" \n`
    )
  }
}

export default handleGit
