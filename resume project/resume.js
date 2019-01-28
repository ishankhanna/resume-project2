var express=require('express')
var router=express.Router()
const fetch=require('node-fetch')

router.get('*',(req,res,next)=>{
    fetch('https://api.myjson.com/bins/thuns')
        .then(res=>res.json())
        .then(data=>{
            res.render('website',data)
        })
})
module.exports = router





// fetch('https://api.myjson.com/bins/pfz1g')