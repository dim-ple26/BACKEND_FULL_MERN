const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use(function(req,res,next){
    console.log("middleware run")
    next();
    // request forward karo
});

// app.get(route,requestHandler)
app.get("/",function(req,res){
    res.send('Hello World')
})
app.get('/profile',function(req,res,next){
    return next(new Error("something went wrong"))
})

// error handling
app.use((err,req,res,next) => {

    console.error(err.stack)
    res.status(500).send("Something Broke!!!")

})

app.listen(3000)