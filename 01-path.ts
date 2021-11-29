import path from 'path'

// 1. 获取路径中的基础名称
/**
 * 01 返回的就是接收路径当中的最后一部分
 * 02 第二个参数表示扩展名，如果说没有设置则返回完整的文件名称带后缀
 * 03 第二个参数作为蛾子后缀时，如果没有在当前路径中北匹配到，那么就会被忽略
 * 04 处理目录路径的时候如果说，结尾处有路径分隔符，则会被忽略掉
 */
console.log(path.basename(__filename))
console.log(path.basename(__filename, '.js'))
console.log(path.basename(__filename, '.js'))

// 2. 获取路径目录名
/**
 *  返回路径中最后一部分的上一层目录所在的路径
 */
console.log(path.dirname(__filename))

// 3. 获取路径扩展名
/**
 *  fjhv path 路径响应文件的后缀名
 */
console.log(path.extname(__filename))

// 4 解析路径
/**
 *  接收一个路径 返回一个对象包含不同的信息
 * 02  root dir base ext name
 */
const obj = path.parse('a/b/c/index.js')
console.log(obj)

// 6  判断当前路径是否是 绝对路径
console.log(path.isAbsolute('/foo'))

// 7 拼接路径
console.log(path.join('a/b', 'c', 'index.html'))

// 8 规范化路径
console.log(path.normalize('a/b/c/d'))

// 9 返回绝对路径
// console.log(path.resolve())
