
const p = require('../path')
const fs = require('fs')
const dotenv = require('dotenv')
const chalk = require('chalk')
const { parse, stringify } = require('envfile')
const envPath = p.cliRoot + '/.env'
const { deepFind } = require('../utils')

import en from './txt/en'
import zh from './txt/zh'
import zhTW from './txt/zh-tw'

const langData: Record<string, any> = {
  'en': en,
  'zh': zh,
  'zhTW': zhTW
}

const langs = ['en', 'zh', 'zhTW']

const env = dotenv.config({ path: envPath })

const VUETOM_CLI_LANG = process.env.VUETOM_CLI_LANG

let envLang = VUETOM_CLI_LANG || 'en'

function useLang () {
  const changeLang = (lang: string) => {
    envLang = lang
    process.env.VUETOM_CLI_LANG = envLang
    const envjson = env.parsed
    envjson.VUETOM_CLI_LANG = lang
    fs.writeFileSync(envPath, stringify(envjson))
    const langText = t(`info.${envLang}`)
    console.log(`${t('info.changeLang')} ${envLang} (${langText}) ✅ \n`)
  }

  const showLang = () => {
    const langText = chalk.gray(`(${t(`info.${envLang}`)})`)
    console.log(`${chalk.gray(t('info.currentLang'))} ${envLang} ${langText} \n`)
    console.log(`${chalk.gray(t('info.activeLang'))}`)
    langs.forEach(ll => {
      const langText = t(`info.${ll}`)
      console.log(`  ${ll}\t${chalk.gray(`=>  ${langText}`)}`)
    })
    console.log('')
  }

  return {
    langs,
    showLang,
    changeLang
  }
}

function t (key: string) {
  return deepFind(langData[envLang], key)
}

export {
  t,
  useLang
}