
var express= require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept, X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DETETE,OPTIONS");
    res.header("X-Powered-By",'3.2.1');
    if(req.method=="OPTIONS") res.sendStatus(200);
    else next();
});

app.get('/',function(req,res){
    res.send('homepage');
})

app.post('/dologin', function(req,res){
    console.log(req.body);
    res.json({"msg":'post successfully'});
})

app.get('/news',function(req,res){
    res.jsonp({"msg":"this is news data"});
})

app.listen(3000,'127.0.0.1');