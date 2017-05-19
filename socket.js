'use strict'

const net = require('net');

const sock = new net.Socket;

sock.on('connect', () => {
  sock.write('GET /en/ HTTP/1.1 \r\n');
  sock.write('Host: istc.am');
  sock.write('\r\n\r\n')
});

sock.setEncoding('utf-8');

const total_data = [];

sock.on('data', d =>  total_data.push(d));

sock.on('end' ,() => {

let total = total_data.reduce((prev, total)  =>  prev +  total);
let obj = {}
let a = total.split('\n\r');
let header = a[0].split('\r\n');
obj['headers'] = header;

obj.body = a[1]

console.log(obj);
})

  sock.connect({
    port: 80,
    host: 'istc.am'
  });
