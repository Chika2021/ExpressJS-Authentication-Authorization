const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    email: {
        type:String,
        unique: true
    },
    password : {
        type: String,            
    }
});




const User = mongoose.model('User', userSchema);

module.exports = User;