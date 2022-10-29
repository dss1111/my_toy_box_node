const express = require('express');
const app = express();

app.listen(process.env.PORT, function(){
    console.log("app start on 8080");
});

app.get('/', function(req, res){
    res.send('homepage');
})