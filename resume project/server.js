const fs=require('fs')
const express=require('express')
const app=express()
const port=process.env.PORT || 8080;
const fetch=require('node-fetch')
const bp = require("body-parser");
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use('/public',express.static('public'))

// app.get('/',(req,res)=>{
//     res.send('Got a request at /')
// })

app.get('/',(req,res,next)=>{
    fetch('https://api.myjson.com/bins/tpniw')
        .then(res=>res.json())
        .then(data=>{
            res.render('website',data)
        })
})

app.post('/', function(req, res) {
    const form = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    }

    console.log(form);

    if (!checkName(form.name)) {
        res.json({ "success": "false", "error": "Enter Valid Name" });
    } else if (!checkEmail(form.email)) {
        res.json({ "success": "false", "error": "Enter Valid Email" });
    } else if (!checkPhone(form.phone)) {
        res.json({ "success": "false", "error": "Enter Valid Phone Number" });
    } else {
        fs.appendFile('mynewfile.txt', JSON.stringify(form), function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
        res.json({ "success": "true" });
    }
});
checkName = (name) => /^[a-zA-Z ]+$/.test(name);
checkPhone = (phone) => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
checkEmail = (email) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);


app.listen(port);
