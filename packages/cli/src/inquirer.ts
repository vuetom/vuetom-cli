const inquirer = require('inquirer')
const t = require('./lang').t

const isNewDirQuestions = {
  name: 'isNewDir',
  type: 'confirm',
  message: t('init.createDir'),
  default: 'Y'
}

const newDirQuestion = {
  name: 'newDir',
  type: 'input',
  message: t('init.dirName')
}

let questions = [
  {
    name: 'title',
    type: 'input',
    message: t('init.title')
  },
  {
    name: 'description',
    type: 'input',
    message: t('init.desc')
  },
  {
    name: 'author',
    type: 'input',
    message: t('init.author')
  },
  {
    name: 'style',
    type: 'list',
    message: t('init.tempSelect'),
    choices: ['blog', 'docs'],
    filter: function (val: any) {
      return val.toLowerCase()
    }
  },
  {
    name: 'origin',
    type: 'list',
    message: t('init.imageSelect'),
    choices: ['local  (fast)', 'github (newest)★'],
    filter: function (val: string) {
      return val.substring(0, 6).trim()
    }
  }
]

module.exports = async function handleInit (isString: boolean, dir: string) {
  let isNewDir = false
  let newDir = './'
  if (!isString) {
    isNewDir = (await inquirer.prompt(isNewDirQuestions)).isNewDir
    if (isNewDir) {
      questions = [newDirQuestion, ...questions]
    }
  } else {
    newDir = dir
  }
  return new Promise((resolve, reject) => {
    inquirer
      .prompt(questions)
      .then((answers: any) => {
        resolve({ isNewDir, newDir, ...answers })
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}
