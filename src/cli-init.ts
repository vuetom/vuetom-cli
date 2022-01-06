#! /usr/bin/env node
const program = require('commander')
const download = require('download-git-repo')
const chalk = require('chalk')
const ora = require('ora')
const fs = require('fs')
const handleInit = require('./inquirer.js')
const spinner = ora()

/**
 * Exit
 */
process.on('exit', () => {
  console.log('')
  // console.log(chalk.hex('#FFC0CB')('  Command \'init\' execution completed'))
  console.log()
})

let branchStep = 1
let currentStep = 1

function init () {
  let branchName = ''
  let projectDir = ''
  let isString = false
  program.parse(process.argv)
  if (program.args.length > 0) {
    projectDir = program.args[0]
    isString = typeof projectDir === 'string'
  }
  handleInit(isString, projectDir)
    .then((projectInfo: ProjectInfo) => {
      const { style, newDir } = projectInfo
      program.init = newDir
      switch (style) {
        case 'blog':
          branchStep = 2
          branchName = 'temp-blog'
          break
        case 'docs':
          branchStep = 2
          branchName = 'temp-docs'
          break
      }
      spinner.start(chalk.hex('#00FFFF')(`[${currentStep}/${branchStep}] Downloading template`))
      download(
        `lauset/vuetom-cli#${branchName}`,
        program.init,
        function (err: Object) {
          if (!err) {
            spinner.succeed(chalk.hex('#00FFFF')(`[${currentStep}/${branchStep}] Downloading template`))
            currentStep++
            handleDownload(projectInfo)
          } else {
            spinner.fail(chalk.redBright(`[${currentStep}/${branchStep}] Downloading template`))
            console.info(err)
            spinner.stop()
          }
        })
    })
    .catch((err: Object) => {
      console.info(chalk.redBright(err))
    })
}

init()

function handleDownload (projectInfo: ProjectInfo) {
  if (projectInfo.style === 'blog') {
    Promise.all([
      handlePackage(projectInfo)
    ]).then(() => {
      handleSuccess()
    }).catch(e => console.log(e))
  } else if (projectInfo.style === 'docs') {
    handlePackage(projectInfo)
      .then(() => handleSuccess())
      .catch(e => console.log(e))
  }
}

function handleSuccess () {
  spinner.stop()

  console.log()
  console.info(chalk.greenBright('Done, Now Run:'))
  console.log()

  if (program.init !== './') {
    console.log(chalk.gray('  # Switch to your blog file directory'))
    console.log(`  $ cd ${program.init}`)
    console.log()
  }
  console.log(chalk.gray('  # Installation package'))
  console.log('  $ yarn or npm install')
  console.log()
}

function handlePackage (projectInfo: ProjectInfo) {
  const path = `${process.cwd()}/${program.init}/package.json`
  spinner.start(chalk.hex('#00FFFF')(`[${currentStep}/${branchStep}] Modify package.json`))
  return new Promise((resolve) => {
    fs.readFile(path,
      (err: Object, data: Object) => {
        if (err) throw err
        const res = JSON.parse(data.toString())
        res.name = projectInfo.title
        res.description = projectInfo.description
        res.version = '1.0.0'
        res.author = projectInfo.author
        const str = JSON.stringify(res, null, 2)
        fs.writeFile(
          path,
          str,
          (err: Object) => {
            if (!err) {
              spinner.succeed(chalk.hex('#00FFFF')(`[${currentStep}/${branchStep}] Modify package.json completed`))
              currentStep++
              resolve({})
            } else {
              spinner.fail(chalk.hex('#00FFFF')(`[${currentStep}/${branchStep}] Failed to modify package.json`))
              throw err
            }
          })
      })
  })
}

export {}
