const express = require("express")//导入express模块
const body_parser = require("body-parser")

const app = express()//创建APP实力
app.use(body_parser.urlencoded({extended:false}))
app.set('view engine','ejs')//设置ejs模板


app.use('/node_modules', express.static('./node_modules'))//托管静态资源
app.use(require("./router/index"))
app.use(require("./router/registration"))

app.listen(80,()=>{ 
    console.log("http://127.0.0.1");
})