const express = require('express');
const router  = express.Router();

const UserRoleService = require('../service/userRoleService');

router.post('/save',(req,res,next)=>{
    res.json(UserRoleService.saveUserRole(req,'E','system'));
});

module.exports = router;