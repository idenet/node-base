import fs from 'fs'
import path from 'path'

fs.readFile(path.resolve('data.txt'), 'utf8', (err, data) => {
  console.log(err)
  console.log(data)
})

fs.appendFile('data.txt', '23423', (err) => {
  console.log('写入成功')
})

// copyfile
fs.copyFile('data.txt', 'test.txt', () => {
  console.log('写入成功')
})

// watchFile
fs.watchFile('data.txt', { interval: 20 }, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('文件被修改了')
    fs.unwatchFile('data.txt')
  }
})
