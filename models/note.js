const mongoose = require('mongoose')


const NoteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    content:String,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


})

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note