import fs from 'fs'
import path from 'path'

export const languages = fs.readFileSync(
  path.resolve(__dirname, '../i18n/lang.json')
)

export const changeLang = (lang: string) => `/${lang}`
