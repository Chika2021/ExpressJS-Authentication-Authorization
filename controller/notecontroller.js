const express = require('express')
const mongoose = require('mongoose')
const Note = require('../models/note')
const User = require('../models/user')



const getNote = (async (req, res, next) => {
    const getnote = await Note.find().populate('user')
    const user = await User.findById()
    console.log(user)
   
    return res.status(200).send(getnote)
})

const search = (async (req,res) => {
    const noteId = req.params.id;

    const searchNote = await Note.findById(noteId)
    if(!searchNote) {
        // return res.json({message:'Error'})
        return res.status(405).json({message: 'Invalid note Id'})
    }
    return res.status(200).json(searchNote)
})

const createNote = (async (req, res) => {
    const { title, content } = req.body

    const userId = req.user.id
    const userEmail = req.user.email

    console.log(userEmail)

    
    if (!req.user || !req.user.id) {
        return res.status(401).json({ message: 'User not authenticated.' });
      }

    
    if(!title) {
        return res.status(400).json({message:'title cannot be left empty'})
    } else if(!content) {
        return res.status(400).json({message:'content cannot be left empty'})
    } else{
    
       
        
    const note = new Note({title, content, user:userId})
    const savedNote = await note.save() 
    res.status(201).json({message:'Note created Successfully', savedNote, email:userEmail })
    }
})

const updateNote = (async (req, res) => {
    const noteId = req.params.id;

    
    const title = req.body.title;
    const content = req.body.content;
    
    await Note.findByIdAndUpdate(noteId, {title, content})

    const note = await Note.findById(noteId)
  
    return res.status(200).json({note})
})


const deleteNote = (async (req, res) => {
    const noteId = req.params.id;
    await Note.findByIdAndDelete(noteId)

    if(!noteId) {
        return res.status(501).json({message:'Invalid note Id'})
    }
    
    return res.status(200).json({message:'Deleted'})
})


module.exports = {
    getNote,
    search,
    createNote,
    updateNote,
    deleteNote
}