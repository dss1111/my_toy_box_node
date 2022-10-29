require('dotenv').config();
const express = require('express');
const app = express();


//app.use('/api',route);

app.listen(process.env.PORT, function(){
    console.log(`app start on ${process.env.PORT}`);
});

app.use(express.static(__dirname+"/build"));
app.get('/', function(request, response){
    response.sendFile('index.js');
});
