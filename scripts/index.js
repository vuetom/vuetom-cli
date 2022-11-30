const fs = require('fs-extra')

async function copyDocs () {
  fs.removeSync('../cli/temp-docs')
  console.log('start copy temp-docs')
  setTimeout(() => {
    fs.copySync('../temp-docs', '../cli/temp-docs')
    fs.removeSync('../cli/temp-docs/node_modules')
    fs.removeSync('../cli/temp-docs/package-lock.json')
  }, 500)
}

async function copyBlog () {
  fs.removeSync('../cli/temp-blog')
  console.log('start copy temp-blog')
  setTimeout(() => {
    fs.copySync('../temp-blog', '../cli/temp-blog')
    fs.removeSync('../cli/temp-blog/node_modules')
    fs.removeSync('../cli/temp-blog/package-lock.json')
  }, 500)
}

async function copyOther () {
  const files = [
    'README.md',
    'README.zh_CN.md',
    'CHANGELOG.md',
    'media'
  ]
  files.forEach(f => {
    fs.removeSync(`../cli/${f}`)
    console.log(`start copy ${f}`)
    setTimeout(() => {
      fs.copySync(`../../${f}`, `../cli/${f}`)
    }, 1000)
  })
}

async function copy () {
  await copyDocs()
  await copyBlog()
  await copyOther()
}

copy()
