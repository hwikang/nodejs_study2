const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port : 3307,
    user : 'root',
    password : '111111',
    database : 'hwidb'
});
console.log('email_post called')

router.post('/form',function(req,res){
    //get : req.param('email')
    //post : req.body.xxxx   
   // res.send("<h1>welcome    "+req.body.email+"</h1>")
   res.render('email.ejs',{email:req.body.email})
});

router.post('/ajax',function(req,res){
    let responseData = {}
    let email = req.body.email
   
    connection.query(`select * from user where email='${email}'`,function(err,rows){
        if(err)throw err;
        if(rows[0]){
            console.log(rows[0])
            responseData.result = 'ok'
            responseData.name = rows[0].name
        }
        res.json(responseData);
    });
    //console.log(req.body.email);
   
});

module.exports = router;   