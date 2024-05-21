const mongoose=require('mongoose')
const users=new mongoose.Schema(
    {
        username:String,
        password:String
    }
)
const UserModel=mongoose.model("logins",users)
module.exports=UserModel;