const chalk = require('chalk')

function printHelp () {
  console.log()
  console.log(chalk.hex('#66CDAA')('  Examples:'))
  console.log()
  console.log(
    chalk.gray('    # create a new project with an official template')
  )
  console.log('    $ vuetom-cli init project-name')
  console.log()
  console.log(chalk.gray('    # show github branch information'))
  console.log('    $ vuetom-cli list temp-docs')
  console.log()
  console.log(chalk.gray('    # show github repository'))
  console.log('    $ vuetom-cli git vuejs')
  console.log()
}

export default printHelp