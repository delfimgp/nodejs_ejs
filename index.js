var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render("./home/index");
});

app.get('/registo',function(req,res){
    res.render("./registo/form_registo");
});

app.listen(8080,function(){
    console.log("Servidor ativo no porto 8080");
});