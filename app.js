const express = require("express")//导入express模块
const ejs =require('ejs')//导入ejs模块
const mysql = require("mysql")//导入mysql模块
const moment = require("moment")//导入时间格式模块
const body_parser = require("body-parser")
const app = express()//创建APP实力
const conn = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"blogs"
})

app.use(body_parser.urlencoded({extended:false}))
app.set('view engine','ejs')//设置ejs模板
app.use('/node_modules', express.static('./node_modules'))//托管静态资源


app.get("/",(req,res) => {
    res.render("index",{})
})
app.get("/user/login",(req,res) => {
    res.render("user/login",{})
})
app.get("/user/register",(req,res) => {
    res.render("user/register",{})
})
//用户注册路由
app.post("/user/register",(req,res) => {
    const userInfo = req.body
    if(!req.body.username||!req.body.password||!req.body.nickname) return res.status(400).send({status:400,msg:"输入有误"})
    const sql = "select count(*) as count from user where username = ?"
    conn.query(sql,req.body.username,(err,result)=>{
        userInfo.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
      if(err) return res.status(500).send({status:500,msg:"服务器响应失 请重试"})
        if(result[0].count !== 0) return res.status(400).send({status:400,msg:"用户名不可用"})
        sql2 = "insert into user set ?"
        conn.query(sql2,userInfo,(err,result)=>{
            if(err) return res.status(500).send({status:500,msg:"服务器响应失败a 请重试!"})
            res.send({status:200,msg:"注册成功"})
        })
    })
})
//用户登录路由
app.post("/user/login",(req,res) => {
    
})

app.listen(80,()=>{
    console.log("http://127.0.0.1");
})