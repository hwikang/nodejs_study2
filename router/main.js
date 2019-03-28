

const express=require('express')
const app = express();
const router = express.Router();
const path = require('path')  //상대경로 지정하려면 필요
router.get('/',function(req,res){
    console.log('main js loaded')
    res.sendFile(path.join(__dirname,'../public/main.html'));
});

module.exports=router;