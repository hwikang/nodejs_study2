const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const main =require('./router/main')
const email =require('./router/email')

//static 파일 - css js image... 을 public 폴더에 밀어넣음
app.use(express.static('public'))
app.use(bodyParser.json()) //json 으로 들어올ㄹ수도있고
app.use(bodyParser.urlencoded({extended:true}));  //데이터가 이방식이나 json 으로 들어올수있음

app.set('view engine', 'ejs');
app.use('/main',main);
app.use('/email',email);


app.listen(3000,function(){
    console.log('express server on 3000')
});  //비동기실행
app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/main.html');
});

