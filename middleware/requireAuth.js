const jwt = require('jsonwebtoken')
const User = require('../models/user')

async function requireAuth (req,res,next) {
   
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
    try {
      const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET); // Extract Bearer token     
      req.user = decoded; // Attach the decoded user data (contains `id` and `email`)
      console.log(req.user)

      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }
}

module.exports =  requireAuth