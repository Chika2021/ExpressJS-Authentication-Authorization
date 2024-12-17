const express = require('express');
const { signUp , loginUser} = require('../controller/authController');
const { checkAuth } = require('../controller/authController');
const { requireAuth } = require('../middleware/requireAuth');


const router =  express.Router();

router.post('/register', signUp)
router.post('/login', loginUser)



module.exports = router;