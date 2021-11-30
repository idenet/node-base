import fs from 'fs'

let buf = Buffer.alloc(10)

// read : 所谓的读操作就是将数据从磁盘文件写入到buffer中
/**
 * fd 定位当前被打开的文件
 * buf 用于表示当前缓冲区
 * offset 表示当前从buf的那个位置开始执行写入
 * length  表示当前次写入的长度
 * position 表示当前从文件那个位置开始读取
 */
// fs.open('data.txt', 'r', (err, rfd) => {
//   console.log(rfd)
//   fs.read(rtd, buf, 0, 3, 0, (err, readBytes, data) => {
//     console.log(readBytes)
//   })
// })

// write 将缓冲区的内容写入到磁盘文件

buf = Buffer.from('1234567890')

fs.open('data.txt', 'w', (err, wfd) => {
  fs.write(wfd, buf, 0, 3, 0, (err, written, buffer) => {
    console.log(written)
  })
})
