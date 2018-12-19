const express = require("express")//导入express模块
const router = express.Router()//创建APP实力
const reg = require("../business/registration")
router.get("/user/login",reg.git_login)
router.get("/user/register",reg.git_register)
//用户注册路由
router.post("/user/register",reg.post_register)
//用户登录路由
router.post("/user/login",reg.post_login)
//用户注销路由
router.get('/getLogout',reg.get_Logout)

module.exports=router