const VncClient = require('vnc-rfb-client');
const Jimp = require('jimp');
//I am shit at programming
var http = require('http');  
var url = require('url');  
var fs = require('fs');   
const express = require('express');
const app = express()

const client = new VncClient();
// Just 1 update per second
app.get('/getframebuffer', function(request, response) {
   //The framebuffer usally is around the size of 1 megabyte.
       response.send(client.getFb());
   });

app.get('/getheight', function(request, response) {
   // pretty sure i can find a better way but im shit at coding
   response.send(client.clientHeight.toString());
});

app.get('/getwidth', function(request, response) {
   response.send(client.clientWidth.toString());
});
app.get('/screenshot', function(request, response) {

   
   response.writeHead(200,{'content-type':'image/jpg'});
   fs.createReadStream('file.jpg').pipe(response);
   
     
   
});

   app.listen(3000, function(){
   
      console.log("App listening on port 3000");
      });







//other shit we dont need
client.changeFps(30);
client.connect({host: '127.0.0.1', port: 5900});
console.log("why")
client.on('frameUpdated', (data) => {
    console.log("FrameBuffer Updated")
    new Jimp({width: client.clientWidth, height: client.clientHeight, data: client.getFb()}, (err, image) => {
      if (err) {
     console.log(err);
  }
 
  const fileName = `${Date.now()}.jpg`;
  
  image.write(`file.jpg`);
});
});

client.on('connectError', (err) => {
   console.log(err);
   console.log("fuck it didnt work")
});

client.on('authError', () => {
   console.log('Authentication failed.');
});

