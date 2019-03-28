const express = require('express');
const app = express();
const bodyParser = require('body-parser')


//static 파일 - css js image... 을 public 폴더에 밀어넣음
app.use(express.static('public'))
app.use(bodyParser.json()) //json 으로 들어올ㄹ수도있고
app.use(bodyParser.urlencoded({extended:true}));  //데이터가 이방식이나 json 으로 들어올수있음
app.set('view engine', 'ejs');
app.listen(3000,function(){
    console.log('express server on 3000')
});  //비동기실행
app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/main.html');
});
app.get('/main',function(req,res){
    res.sendFile(__dirname+'/public/main.html');
});
app.post('/email_post',function(req,res){
    //get : req.param('email')
    //post : req.body.xxxx   
   // res.send("<h1>welcome    "+req.body.email+"</h1>")
   res.render('email.ejs',{email:req.body.email})
});

app.post('/ajax_send_email',function(req,res){
    let responseData = {result:'ok',email:req.body.email}
    //console.log(req.body.email);
    res.json(responseData);
});