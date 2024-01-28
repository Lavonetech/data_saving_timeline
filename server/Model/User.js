const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
 firstName:{
    type:String
 },
 lastName:{
    type:String
 },
email:{
    type:String,
    required:true
 },

 password:{
    type:String,
    required:true
 },


})

const Users=mongoose.model("users",UserSchema);
module.exports=Users;