/**
 * 01 将来调用时需要接口类似于 a/b/c 这样的路径  他们之间是采用 / 去连接的
 * 02 利用/ 分隔符将路径进行拆分。将每一项放入数组中进行管理 ['a', 'b', 'c']
 * 03 对上述的数组进行遍历，我们需要拿到每一项， 然后与前一项进行拼接
 * 04 判断一下当前对拼接之后的路径是否具有操作权限，如果有 啧证明存在。否则就需要执行创建
 */

import fs from 'fs'
import path from 'path'

function makeDirSync(dirPath) {
  let items = dirPath.split(path.sep)
  for (let i = 0; i < items.length; i++) {
    let dir = items.slice(0, i).join(path.sep)
    try {
      fs.accessSync(dir)
    } catch (error) {
      fs.mkdirSync(dir)
    }
  }
}

makeDirSync('a\\b\\c')
