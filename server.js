var express = require('express');
var app = express();
var path=require('path')

app.get('/', (req,res,next)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));

})

// app.use('/', express.static(__dirname + '/public'));

app.listen(process.env.PORT ||3000,  () =>{ console.log('listening'); });