const express = require('express')
const { getNote, createNote, updateNote, deleteNote, search } = require('../controller/notecontroller')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)
router.get('/', getNote)
router.get('/search/:id', search)
router.post('/create', createNote)
router.put('/update/:id', updateNote )
router.delete('/delete/:id', deleteNote)




module.exports = router