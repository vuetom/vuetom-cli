const logger = require('../logger')
import { t, useLang } from '../lang'

const { langs, showLang, changeLang } = useLang()

function handleLang (lang: string) {
  if (lang) {
    if (typeof lang === 'boolean') {
      showLang()
      return
    }
    if (langs.includes(lang)) {
      changeLang(lang)
    } else {
      logger.error(
        `${t('error.lang')} ${langs} \n`
      )
    }
  }
}

export default handleLang