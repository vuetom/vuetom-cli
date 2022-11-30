
const p = require('../path')
const util = require('../utils')
const fs = require('fs')
const dotenv = require('dotenv')
const gradient = require('gradient-string')
const envPath = p.cliRoot + '/.env'
const exec = require('child_process').execSync
const t = require('../lang').t
const { stringify } = require('envfile')

const env = dotenv.config({ path: envPath })

const CLI_VERSION: string = process.env.CLI_VERSION || ''
const CLI_VERSIONS: string = process.env.CLI_VERSIONS || ''
// const CLI_CHECK: string = process.env.CLI_CHECK || ''

function handleUpdate (ver: string | boolean) {
  if (ver) {
    let all_vers = []
    try {
      console.log(' ')
      console.log(gradient.fruit(t('update.updateCheck')))
      console.log(' ')
      all_vers = exec('pnpm view vuetom-cli versions --workspaces=false --json')
    } catch (e) {
      // ...
    }
    all_vers = all_vers && JSON.parse(all_vers)
    const last_ver = all_vers[all_vers.length - 1]
    const check_date = util.getYMD()
    if (CLI_VERSION === last_ver) {
      console.log(' ')
      console.log(gradient('cyan', 'pink')(t('update.noUpdate')))
      console.log(' ')
      const envjson = env.parsed
      envjson.CLI_CHECK = check_date
      fs.writeFileSync(envPath, stringify(envjson))
      return
    }
    const cli_version_index = all_vers.findIndex((v: string) => v === CLI_VERSION)
    const cli_versions = all_vers.slice(cli_version_index).join(',')
    if (CLI_VERSION !== last_ver) {
      console.log(gradient.rainbow('❄︎============================================================❄︎'))
      const duck = gradient('red', 'blue').multiline([
        '❄︎   __',
        '❄︎ <(o )___' + `  ${t('update.updateCan')} ${CLI_VERSION} -> ${last_ver}.`,
        '❄︎  ( ._> /' + `  ${t('update.run')} "npm i -g vuetom-cli" OR "vuetom-cli -u ${last_ver}" ${t('update.toUpdate')}`,
        "❄︎   `---'"
      ].join('\n'))
      console.log(duck)
      console.log(gradient.rainbow('❄︎============================================================❄︎'))
      const envjson = env.parsed
      envjson.CLI_VERSIONS = cli_versions
      envjson.CLI_CHECK = check_date
      fs.writeFileSync(envPath, stringify(envjson))
    }
    console.log(' ')
    if (typeof ver !== 'string') return
    // start check & update version
    {
      const vers = CLI_VERSIONS?.split(',')
      const uver =
        ver.toUpperCase().startsWith('V') ? (ver.toUpperCase().replace('V', '')) : ver
      if (vers?.includes(uver)) {
        console.log(`${t('update.updateTo')} ${uver}`)
        try {
          exec(`npm i -g vuetom-cli@${uver}`)
          console.log(gradient('cyan', 'pink')(t('update.updateOk')))
        } catch (e) {
          // ...
        }
      } else {
        console.log(`${t('update.updateNoBack')}`)
      }
    }
    console.log(' ')
  }
}

export default handleUpdate