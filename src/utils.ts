const path = require('path')
const exec = require('child_process').execSync

module.exports = {
  isLocalPath (templatePath: string) {
    return /^[./]|(^[a-zA-Z]:)/.test(templatePath)
  },
  getTemplatePath (templatePath: string) {
    return path.isAbsolute(templatePath)
      ? templatePath
      : path.normalize(path.join(process.cwd(), templatePath))
  },
  formatJSON (str: string) {
    str = str.replace(/(?:\s*['"]*)?([a-zA-Z0-9]+)(?:['"]*\s*)?:/g, '$1:')
    return str
  },
  gitUser () {
    let name
    let email
    try {
      name = exec('git config --get user.name')
      email = exec('git config --get user.email')
    } catch (e) {
      console.log(e)
    }
    name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
    email = email && (' <' + email.toString().trim() + '>')
    return (name || '') + (email || '')
  }
}
