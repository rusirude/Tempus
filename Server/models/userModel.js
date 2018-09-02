const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

const UserModel = module.exports = mongoose.model('users',userSchema);

module.exports.getUserById = function(id,callback){
    UserModel.findById(id,callback);
}

module.exports.getUserByUsername = function(username,callback){
    const query = {username:username}
    UserModel.findOne(query,callback);
    
}

module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password = hash;            
            newUser.save(callback);
        });
    });
}

        
module.exports.comparePassword = function(password,hash,callback){
    bcrypt.compare(password,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch)
    });
}