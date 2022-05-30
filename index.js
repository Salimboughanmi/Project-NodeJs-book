

const express = require('express');
const bodyParser=require('body-parser')
const app = express();
const books = require('./routes/book.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myappn',{useNewUrlParser:true})
.then(()=>app.use("/", books))
.catch(err=>console.log('fail',err));

app.listen(8088);
console.log('8088 is the magic port');






//save multiple documents to collection

/*Book.collection.insert(books, function(err,docs){
    if(err)
    {
        return console.error(err);
    }
    else
    { 
        console.log("multiple documents inserted")
    }
    })
        
*/
