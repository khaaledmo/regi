const mongoose = require('mongoose');
const schema = mongoose.Schema;
const usersSchema = new schema({
    name : String,
    email : String,
    password : String

}, {timestamps : true});
module.exports =  mongoose.model('users' , usersSchema);
