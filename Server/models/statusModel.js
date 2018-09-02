const mongoose = require('mongoose');
const StarusCategory = require('./statusCategory');


const statusSchema = mongoose.Schema({
    code:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StarusCategory'
    }


});

const StatusModel = module.exports = mongoose.model('statuses',statusSchema);

module.exports.findStatusByid = function(id,callback){
    StatusModel.findById(id,callback);
}

module.exports.findStatusByCode = function(code,callback){
    let query = {code:code}
    StatusModel.findOne(query,callback);
}
