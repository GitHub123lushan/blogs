const mysql = require("mysql")//导入mysql模块
const conn = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"blogs"
})
module.exports=conn