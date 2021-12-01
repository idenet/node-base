import http from 'http'
import url from 'url'

let server = http.createServer((req, res) => {
  let [pathname, query] = url.parse(req.url)

  // post
  let arr = []
  res.on('data', (data) => {
    arr.push(data)
  })

  res.on('end', () => {
    console.log(Buffer.concat(arr).toString())
  })
})

server.listen(1234, () => {
  console.log('服务端启动了。。。')
})
