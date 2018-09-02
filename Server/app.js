// import module

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const db = require('./database');

db.on('connected',()=>{
    console.log('Mongo db is Run on Port 27017');
});

db.on('error',(error)=>{
    console.log('Mongo db is not Running'+error);
});


var app = express();
const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(express.static(path.join(__dirname,'public')));

const userRoute = require('./routes/userRoute');
const userRoleRoute = require('./routes/userRoleRoute');

app.use('/user',userRoute);
app.use('/userRole',userRoleRoute);

app.get('/',(req,res)=>{
    res.send('Server is Running');
});

app.listen(port,()=>{
    console.log('Server started on port :'+port);
});