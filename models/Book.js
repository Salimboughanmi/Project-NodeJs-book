const mongoose = require('mongoose')




var BookSchema= new mongoose.Schema({
    id:  Number,
 name:String,
 price : Number,
 qte : Number
 })
 
 var  Book=mongoose.model('Book', BookSchema, 'bookstore');
 module.exports = Book