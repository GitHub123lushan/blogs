

module.exports={
    index (req,res) {
        // let ses = req.session.result||[{username:false}]
        res.render("index",{result:req.session.result})
    } 
}