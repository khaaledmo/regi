const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../models/User');

const register = (req, res , next)=>{
    bcrypt.hash(req.body.password , 10 , function(err, hashedPass){
        if(err){
            res.json({
                error : err
            })
            }
            let user = new User({
                name : req.body.name,
                email : req.body.email,
                password : hashedPass
            })
            user.save((err)=>{
console.log('couldn');
            });
            
            
      
        }) 
   
}

module.exports = {register};
