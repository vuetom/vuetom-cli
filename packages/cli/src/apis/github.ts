const axios = require('axios')
const spinner = require('../spinner')
import { VuetomCli } from '../types'

const getReleaseList = (owner: string, repo: string, cb: Function) => {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases`
  spinner.start()
  axios({
    url,
    method: 'get',
    headers: { 'User-Agent': '' }
  })
    .then(function (resp: any) {
      spinner.stop()
      if (resp.status === 200) {
        const data1 = resp.data
        const result: Record<string, string> = {
          'main': '@',
          'temp-docs': '@',
          'temp-blog': '@'
        }
        const data = data1.map((d1: any) => {
          const item: VuetomCli.releaseType = {
            name: d1.name,
            tagName: d1.tag_name,
            tagCommit: d1.target_commitish,
            pubishedTime: d1.published_at
          }
          return item
        })
        data.forEach((d: VuetomCli.releaseType) => {
          const t = d.tagCommit
          if (result[t] === '@') {
            const n = d.name
            if (n.indexOf('@') != -1) {
              result[t] = d.name.split('@')[1]
            }
          }
        })
        cb(result)
      }
    })
}

export {
  getReleaseList
}