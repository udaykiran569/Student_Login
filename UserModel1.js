const mongoose = require("mongoose")
const userschema=new mongoose.Schema({
    name:String,
    father_name:String,
    roll_no:String,
    branch:String,
    section:String,
    percentage:Number,
    education:Array,
    marks:Array
})
const UserModel1=mongoose.model("details",userschema);
module.exports=UserModel1;
