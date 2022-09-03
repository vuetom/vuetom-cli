const p = require('../path')
const utils = require('../utils')
const dotenv = require('dotenv')
const chalk = require('chalk')
const envPath = p.cliRoot + '/.env'
const { getReleaseList } = require('../apis/github')
const { t } = require('../lang')

dotenv.config({ path: envPath })

const THEME_VERSION = process.env.THEME_VERSION

let showList: boolean = false

let versionData: Record<string, string> = {}

function showThemeVer () {
  console.log(
    chalk.green(
      `\n ${t('info.versionCheck')} \n`
    )
  )
  console.log(` ${t('info.versionShow')}: \n`)
  console.log(`   [ ${chalk.green(THEME_VERSION)} ] vitepress-theme-vuetom\n`)
}

function showCliVer () {
  const pkg = utils.version('CLI')
  showVer(pkg)
}

function showDocsVer () {
  // const pkg = utils.version('DOCS')
  const tag = 'temp-docs'
  const pkg = {
    name: tag,
    version: versionData[tag]
  }
  showVer(pkg)
}

function showBlogVer () {
  // const pkg = utils.version('BLOG')
  const tag = 'temp-blog'
  const pkg = {
    name: tag,
    version: versionData[tag]
  }
  showVer(pkg)
}

function showVer (pkg: { name: string; version: string }) {
  const { name, version } = pkg
  let res = `   [ ${chalk.green(version)} ] ${name}`
  if (version && THEME_VERSION) {
    const p1 = Number(version.replaceAll('.', ''))
    const p2 = Number(THEME_VERSION.replaceAll('.', ''))
    if (p1 < p2 && name !== 'vuetom-cli') {
      res += `\t${chalk.bgYellow(' OH NO T_T ! ')} `
      res += `${chalk.gray(
        t('info.versionWarn')
      )}`
    }
    console.log(res + '\n')
  }
}

function handleVer (temp: string, list: boolean) {
  const t = temp.toUpperCase()
  const l = list ?? true
  showList = l
  if (t === '-A') {
    showList = true
  }
  showCliVer()
  showThemeVer()
  getReleaseList('lauset', 'vuetom-cli', (res: any) => {
    versionData = res
    if (t === undefined || t === 'ALL' || t === '-A') {
      showDocsVer()
      showBlogVer()
    } else if (t === 'DOC' || t === 'DOCS') {
      showDocsVer()
    } else if (t === 'BLOG') {
      showBlogVer()
    } else {
      // error
    }
  })
}

export default handleVer
