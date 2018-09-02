const express = require('express');
const passport = require('passport');
const router  = express.Router();
const jwt  = require('jsonwebtoken');
const config = require('../config/config');

const User = require('../models/userModel')

router.post('/register',(req,res,next)=>{
    let newUser = new User({
        username:req.body.username,
        password:req.body.password

    });
    User.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success:false,message:'Not Save'});
        }
        else{
            res.json({success:true,message:'Save'});
        }
    });
});

router.post('/authenticate',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false,message:'Use Not Found'});
        }

        User.comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(),config.secreat,{
                    expiresIn:604800
                });
                res.json({
                    success:true,
                    token:'JWT '+token
                });
            }
            else{
                return res.json({success:false,message:'Use Not Found'})
            }
        });
    });
});

router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.send('profile');
});



module.exports = router;