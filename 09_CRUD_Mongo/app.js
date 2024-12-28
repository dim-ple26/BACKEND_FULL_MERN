const express =require('express');
const app = express();
const userModel=require('./usermodel');
app.get('/',(req,res)=> {
    res.send("hey");
})

//CREATE
app.get('/create', async (req,res)=> {
   let createuser = await userModel.create({
        name:"Dimple",
        username:"dimpsss",
        email:"dim25@gmail.com"
    })
    res.send(createuser);
})

//UPDATE
app.get('/update', async (req,res)=> {
    //findOneUpdate(find,update,true)
  let updateduser= await userModel.findOne({username:"dimpsss"},{name:"dimpiiiii"},{new:true})
     res.send(updateduser);
 })

app.get('/read', async (req,res)=> {
 let users = await userModel.find();
    res.send(users);

})

//app.get('/read', async (req,res)=> {
    // for reading or finding specfic users
  //  let users = await userModel.find({username:"Dimple"});
    //   res.send(users);
   //
   //})
   
app.get('/delete', async (req,res)=> {
    let usersdel = await userModel.deleteOne({username:"Dimple"});
       res.send(usersdel);
   
   })
   


app.listen(3000);