const mongoose = require('mongoose');
const Status = require('./statusModel');

const userRoleSchema = mongoose.Schema({
    code:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require: true
    },
    isEditable:{
        type:Boolean,
        require:true
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Status'
    },
    createdBy:{
        type:String,
        require:true
    },
    createdOn:{
        type:Date,
        require:true
    },
    updatedBy:{
        type:String,
        require:false
    },
    updatedOn:{
        type:Date,
        require:false
    },

});

const UserRoleModel = module.exports = mongoose.model('userroles',userRoleSchema);

module.exports.addUserRole = function(newUserRole,callback){
    newUserRole.save(callback);
}