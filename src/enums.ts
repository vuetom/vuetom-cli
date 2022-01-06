
interface ProjectInfo {
  title: string,
  author: string,
  description: string,
  style: string,
  isNewDir?: string,
  newDir?: string
}

enum DownloadState {
  start = 1,
  stop = 2,
  succeed = 3,
  fail = 4
}

exports.Choices
exports.DownloadS