let http = require('http')
let users = [{ id: 1, name: 'fuck' }, { id: 2, name: 'kimi' }]
let server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users))
  } else {
    res.end('not found')
  }
})

server.listen(3389, () => {
  console.log('服务启动成功')
})
