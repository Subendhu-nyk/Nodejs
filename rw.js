// const http= require('http');
// const fs = require('fs');

// const server= http.createServer((req,res)=> {
//     const url= req.url;
//     const method=req.method;
//     if(url === '/')
//     {
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }
//     if(url==='/message' && method ==='POST')
//     {
//        fs.writeFileSync('message.txt','DUMMY'); 
//         res.statusCode=302;
//         res.setHeader('Location','/');
//         return res.end();
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Welcome to NodeJs</h1></body>');
//     res.write('</html>');
//     res.end();
//     });
// server.listen(4000);

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === '/') {
//     res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//   }
//   if (url === '/message' && method === 'POST') {
//     const body = [];
//     req.on('data', (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on('end', () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split('=')[1];
//       fs.appendFileSync('message.txt', message);
//     });
//     res.statusCode = 302;
//     res.setHeader('Location', '/');   
//     return res.end();
//   }
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title><head>');
//   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//   res.write('</html>');
//   res.end();
// });

// server.listen(3000);

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body>');

    // Read messages from file and display them
    const messages = fs.readFileSync('message.txt', 'utf-8');
    if (messages) {
      res.write('<h2>Messages:</h2>');
      res.write('<ul>');
      const messageList = messages.split('\n');
      messageList.forEach(message => {
        res.write(`<li>${message}</li>`);
      });
      res.write('</ul>');
    }

    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.appendFileSync('message.txt', message + '\n');
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');   
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
