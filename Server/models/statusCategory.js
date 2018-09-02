const mongoose = require('mongoose');

const statusCategorySchema = mongoose.Schema({
    code:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
});

const StatusCategoryModel = module.exports = mongoose.model('statuscategories',statusCategorySchema);