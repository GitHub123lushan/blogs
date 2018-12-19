const express = require("express")//导入express模块
const fs = require("fs")
const session = require('express-session')
const path = require("path")
const body_parser = require("body-parser")

  
const app = express()//创建APP实力
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 24*360000 }
  }))
app.use(body_parser.urlencoded({extended:false}))
app.set('view engine','ejs')//设置ejs模板


app.use('/node_modules', express.static('./node_modules'))//托管静态资源
fs.readdir(path.join(__dirname,"./router"),(err,filter)=>{
    filter.forEach((value,index) => {
        app.use(require(path.join(__dirname,"./router",value)))
    });
})

app.listen(80,()=>{ 
    console.log("http://127.0.0.1");
})