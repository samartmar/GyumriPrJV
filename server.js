'use strict'

const http = require('http');

const server = http.createServer((req , res) => {
  if(req.url === '/'){
    res.setHeader('content-type' , 'text/html')
    res.end(`
      <!doctype html>
      <body>
        <h1>some header</h1>
        <p> what a body =P </p>
        </body>

      `)
    }else{
        res.end('UNKNOWN')
      }
})
server.listen(8000,() => console.log("Started you server"));
