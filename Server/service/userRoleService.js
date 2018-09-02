const UserRoleModel = require('../models/userRoleModel');
const StatusModel = require('../models/statusModel');

module.exports.saveUserRole = function(request,type,username,callback){    
    let userRole = new UserRoleModel({
        code:request.body.code,
        description:request.body.description,
        type:type,
        isEditable:false,
        createdBy:username,
        createdOn:new Date(),
        updatedBy:username,
        updatedOn:new Date(),
    });

    StatusModel.findStatusByCode(request.body.status).exec(function(err,status){
        if(err){
            throw err;
        }
        else{
            userRole.status = status._id;
        }
    });

    UserRoleModel.addUserRole(userRole);
    return {code:'success'}
}