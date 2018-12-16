const express = require("express")//导入express模块
const router = express.Router()//创建APP实力
const business = require("../business")
router.get("/",business.index)
module.exports=router