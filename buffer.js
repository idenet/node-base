let b1 = Buffer.alloc(10)
let b2 = Buffer.allocUnsafe(10)

/**
 * 填充buffer
 */
b1.fill('132', 1, 3)

b1.write('123', 1, 3)

let c1 = Buffer.from('教育')
let c2 = Buffer.from('拉钩')

let b = Buffer.concat([c2, c1])

/**
 * split
 */

ArrayBuffer.prototype.split = function (sep) {
  let len = Buffer.from(sep).length
  let ret = []
  let start = 0

  while ((offset = this.indexOf(sep, start) !== -1)) {
    ret.push(this.slice(start, offset))
    start = offset + len
  }
  ret.push(this.slice(start))
  return ret
}
