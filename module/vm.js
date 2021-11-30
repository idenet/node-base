import fs from 'fs'
import path from 'path'

function Module(id) {
  this.id = id
  this.exports = {}
}

Module._resolveFilename = function (filename) {
  // 利用path将filename转为绝对路径
  let abspath = path.resolve(__dirname, filename)

  // 判断当前路径对应的内容是否存在
  if (fs.existsSync(abspath)) {
    // 如果条件城里 啧说明 abspath 对应内容存在
    return abspath
  } else {
    let suffix = Object.keys(Module._extensions)
    for (let i = 0; i < suffix.length; i++) {
      let newpath = abspath + suffix[i]
      if (fs.existsSync(newpath)) {
        return newpath
      }
    }
  }
  throw new Error(`${filename} is not exists`)
}

Module._extensions = {
  '.js'(module) {
    // 读取
    let content = fs.readFileSync(module.id, 'utf-8')
    // 包装
    content = Module.wrapper[0] + content + Module.wrapper[1]

    // VM
    let compileFn = vm.runInThisContext(content)

    // 准备参数的值
    let exports = module.exports
    let dirname = path.dirname(module.id)
    let filename = module.id

    // 调用
    compileFn.call(exports, exports, myRequire, module, filename, dirname)
  },
  '.json'() {},
}

Module.wrapper = [
  '(function (exports, require, module, __filename, __dirname) {',
  '})',
]

Module._cache = {}

Module.prototype.load = function () {
  let extname = path.extname(this.id)
  Module._extensions[extname](this)
}

function myRequire(filename) {
  // 1. 获取绝对路径
  let absPath = Module._resolveFilename(filename)
  // 2. 缓存优先
  let cacheModule = Module._cache[absPath]

  if (cacheModule) return cacheModule.exports

  // 3. 创建空对象加载目标模块
  let module = new Module(absPath)

  //4. 缓存加载模块
  Module._cache[absPath] = module

  // 5. 执行加载
  module.load()

  // 返回数据
  return module.exports
}

let obj = myRequire('./v')
