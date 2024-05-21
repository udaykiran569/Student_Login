const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    Name:String,
    Father_Name:String,
    Student_id:String,
    Email:String,
    Birthdate:String,
    Year:String,
    Branch:String,
    Section:String,
    Phone_Number:String,
    Batch:String,
    Education: [{ type: mongoose.Schema.Types.Mixed }], 
    Gpa:[{type: mongoose.Schema.Types.Mixed}]
})
const UserModel_newUser=mongoose.model('newusers',userschema);
module.exports=UserModel_newUser
 

//Education:[
    //   {tenth:String,Percentage:String},
    //   {inter:String,Percentage:String},
    //   {btech:String,Percentage:String}
    // ],
    // Gpa:[
    //     {first_year:String},
    //     {second_year:String},
    //     {third_year:String},
    //     {fourth_year:String},
    //   ]