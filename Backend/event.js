// const { Console } = require('console');
// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('Waterfull', () => {
//   console.log('please turn off the motor!');
//   setTimeout(()=>{
//     console.log('please turn off the motor when timeout is complete')
//   },4000);
// });
// console.log('here is the next line');
// myEmitter.emit('Waterfull');
// console.log('and here is the another next line');

// const http = require("http");

// const port = process.env.PORT || 5000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hey here is your server!!!</h1>");
// });
// server.listen(port, () => {
//   console.log("server is listening at port ${port}");
// });

const http = require('http');
const hostname = '127.0.0.1' ;
const port = 8000;

const server = http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/html');
    res.end("<h1><b>Here is server working!!!</b></h1>");
    const fruits =[ "apple", "banana","coconut","chiku","angoor"];
    const start = -6;
    let a=10 ;b=20;
    function divide(a,b){
        if(b=0){
            throw'not found';
        }
        console.log( a/b);

    }
    console.log("before slice:",fruits);
    const removedItems = fruits.splice(start);
    console.log("after slice",fruits);
    console.log(removedItems);
});

server.listen(port,hostname,()=>{
    console.log("server is running :http://${hostname}:${port}/");
   ;     
});
