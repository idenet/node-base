import { Readable } from 'stream'

let source = ['lg', 'zce', 'syy']

// 自定义readable
class MyReadable extends Readable {
  constructor() {
    super()
    this.source = source
  }
  _read() {
    let data = this.source.shift() || null
    this.psuh(data)
  }
}

let myReadable = new MyReadable(source)

myReadable.on('readable', () => {
  let data = null
  while ((data = myReadable.read(2) !== null)) {
    console.log(data.toString())
  }
})
