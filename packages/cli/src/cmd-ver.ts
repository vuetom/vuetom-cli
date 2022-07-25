const p = require('./path')
const utils = require('./utils')
const dotenv = require('dotenv')
const chalk = require('chalk')
const request = require('request')
const envPath = p.cliRoot + '/.env'

dotenv.config({ path: envPath })

const THEME_VERSION = process.env.THEME_VERSION

let showList: boolean = false

function showThemeVer () {
  console.log(
    chalk.green(
      `\n Make Sure Templates(temp-blog/temp-docs)'s Version >= vitepress-theme-vuetom's Version \n`
    )
  )
  console.log(' Version Show: \n')
  console.log(`   [ ${chalk.green(THEME_VERSION)} ] vitepress-theme-vuetom\n`)
}

function showCliVer () {
  const pkg = utils.version('CLI')
  showVer(pkg)
}

function showDocsVer () {
  const pkg = utils.version('DOCS')
  showVer(pkg)
}

function showBlogVer () {
  const pkg = utils.version('BLOG')
  showVer(pkg)
}

function showVer (pkg: { name: string; version: string }) {
  const { name, version } = pkg
  let res = `   [ ${chalk.green(version)} ] ${name}`
  if (version && THEME_VERSION) {
    const p1 = Number(version.replaceAll('.', ''))
    const p2 = Number(THEME_VERSION.replaceAll('.', ''))
    if (p1 < p2 && name !== 'vuetom-cli') {
      res += `\t${chalk.bgYellow(' OH NO! ')} `
      res += `${chalk.gray(
        "This version < theme version. You'd better wait for the update"
      )}`
    }
    console.log(res + '\n')
  }
}

function handleVer (temp: string, list: boolean) {
  const t = temp.toUpperCase()
  const l = list ?? true
  showList = l
  if (t === '-L') {
    showList = true
  }
  console.log(temp, showList)
  showThemeVer()
  if (t === undefined || t === 'ALL' || t === '-L') {
    showCliVer()
    showDocsVer()
    showBlogVer()
  } else if (t === 'DOC' || t === 'DOCS') {
    showDocsVer()
  } else if (t === 'BLOG') {
    showBlogVer()
  } else {
    // error
  }
}

export default handleVer
