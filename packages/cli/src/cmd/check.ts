
const p = require('../path')
const util = require('../utils')
const dotenv = require('dotenv')
const envPath = p.cliRoot + '/.env'

// eslint-disable-next-line no-unused-vars
const env = dotenv.config({ path: envPath })

const CLI_CHECK: string = process.env.CLI_CHECK || ''

function checkUpdate () {
  const check_date = util.getYMD()
  if (CLI_CHECK !== check_date) {
    // check version
    require('./update').default(true)
  }
}

export default checkUpdate