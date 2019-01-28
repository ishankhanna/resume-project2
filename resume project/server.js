const fs=require('fs')
const express=require('express')
const resumeroute=require('./resume.js')
const app=express()
const port=process.env.PORT || 8080;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use('/public',express.static('public'))


app.use('/resume',resumeroute)

app.get('/',(req,res)=>{
    res.send('Got a request at /')
})

app.post('/resume',(req,res)=>{
    let record={
        "name":req.body.name,
        "email":req.body.emailid,
        "phone":req.body.phone,
        "message":req.body.message
    };
    fs.appendFile('mynewfile1.txt', JSON.stringify(record), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    res.redirect('/resume#contact');
})
app.listen(port);
