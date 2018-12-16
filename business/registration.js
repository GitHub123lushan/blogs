const moment = require("moment")//导入时间格式模块
const conn = require("../bd/bd")

module.exports = {
    git_login (req,res) {
        res.render("user/login",{})
    },
    git_register (req,res) {
        res.render("user/register",{})
    },
    post_register (req,res) {
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
    },
    post_login (req,res) {
        const data = req.body
        if(!data.username.trim()|| !data.password.trim()) return res.status(400).send({status:400,msg:"用户名或密码不能为空"})
        const sql  = "select * from user where username=? and password = ?"
        conn.query(sql,[data.username.trim(),data.password.trim()],(err,result)=>{
            if(err) return res.status(500).send({status:500,msg:"服务器响应失败 请重试"})
            if(result.length === 0) return res.status(400).send({status:400,msg:"用户名或密码有误 请重新输入"})
            res.send({status:200,msg:"登录成功"})
        })
    }
}
