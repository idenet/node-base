import fs from 'fs'

fs.open('data.txt', 'r', (err, fd) => {
  console.log(fd)
  fs.close(fd, (err) => {
    console.log('关闭成功')
  })
})
