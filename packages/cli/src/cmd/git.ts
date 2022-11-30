const logger = require('../logger')
// const axios = require('axios')
const chalk = require('chalk')
const spinner = require('../spinner')
const t = require('../lang').t

const GITEE_URL = 'https://gitee.com/api/v5/users'
const GITHUB_URL = 'https://api.github.com/users'

function req (url: string, type: string) {
  spinner.start()
  setTimeout(() => {
    console.log(' ')
    console.log(
      '  ' +
      chalk.hex('#FFC0CB')('Go to ') +
      chalk.hex('#00FFFF')(url) +
      chalk.hex('#FFC0CB')(' to get data')
    )
    console.log(' ')
    spinner.stop()
  }, 1000)
  // axios({
  //   url,
  //   method: 'get'
  // })
  //   .then(function (resp: any) {
  //     if (resp.status === 200) {
  //       const data = JSON.parse(resp.data)
  //       if (Array.isArray(data)) {
  //         logger.success(`${type} reop list: \n`)
  //         data.forEach((repo) => {
  //           console.log(
  //             '  ' +
  //           chalk.hex('#FFC0CB')('★') +
  //           '  ' +
  //           chalk.hex('#00FFFF')(repo.name) +
  //           ' - ' +
  //           repo.description
  //           )
  //         })
  //       } else {
  //         logger.error(data.message)
  //       }
  //     }
  //     console.log()
  //   })
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
      `"${type}" ${t('error.gitType')} \n`
    )
  }
}

export default handleGit
