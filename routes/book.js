const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth.js');


const  { 
    getBooks,
   getBook,
    createBook,
    updateBook,
   deleteBook
} = require('../controllers/book.js')

router.get('/',auth, getBooks)

router.get('/:bookID',auth, getBook)

router.post('/',auth, createBook) 

router.put('/:bookID',auth, updateBook) 

router.delete('/:bookID', deleteBook)

module.exports = router


