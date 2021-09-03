const express = require('express')
const router = express.Router();
const {insertUser, findUser,saveUserPassword} = require('../controller/userController')
const bodyParser = require('body-parser')
    
router.use(bodyParser.json());
// post requsert to insert user 
router.post('/',insertUser)
// get user detailes
router.get('/:name',findUser)
// save user password
router.put('/changePassword/:name',saveUserPassword)

module.exports = router