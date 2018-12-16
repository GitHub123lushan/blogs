const express = require("express")//导入express模块
const router = express.Router()//创建APP实力
const mysql = require("mysql")//导入mysql模块
const reg = require("../business/registration")
router.get("/user/login",reg.git_login)
router.get("/user/register",reg.git_register)
//用户注册路由
router.post("/user/register",reg.post_register)
//用户登录路由
router.post("/user/login",reg.post_login)


module.exports=router