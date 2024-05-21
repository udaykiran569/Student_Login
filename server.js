const express=require('express');
const mongoose=require('mongoose');
const UserModel = require('./UserModel');
const cors=require('cors');
const UserModel1 = require('./UserModel1');
const UserModel_newUser = require('./UserModel_newUser');

const app=express();

app.use(cors());
app.use(express.json())
const port=3000
const link='mongodb://localhost:27017/std_base'
mongoose.connect(link);
app.get("/getdetails",(req,res)=>{
     UserModel.find()
    .then((user)=>res.json(user))
    .then((user)=>console.log(user))
    .catch((err)=>res.json(err))
})
app.post("/getUser",(req,res)=>{
    console.log("vachanu");
    // console.log(req.body.username);
    const username=req.body.username;    
    UserModel1.find({roll_no:username})
   .then((user)=>res.json(user))
//    .then((user)=>console.log(user))
   .catch((err)=>res.json(err))
})

app.post("/newUser",(req,res)=>{
    let data=req.body;
    console.log( data);
    UserModel_newUser.create(data)
    .then((user)=>res.json("insert done"))
    .catch((err)=>res.json(err))
})

app.listen(port,()=>{
    console.log(`server is run at ${port}`)
})