const books = require('../books.js')
//importer le fichier models
const Book = require('../models/Book.js')
const getBooks = ((req, res) => {
    res.json(books)
})
const getBook = ((req, res) => {
    const id = Number(req.params.bookID)
    const book = books.find(book => book.id === id)

        if (!book) {
        return res.status(404).send('Book not found')
    }
    res.json(book)
})
//code qui marche il faut saisir le nouveau livre dans postman et en vérifiant dans la BD on le trouve inséré
const createBook = ((req, res) => {
    console.log('Body:',req.body);
    const data=req.body;
    const newBook=new Book(data);
    
    newBook.save((error)=>{
    if(error){
    res.status(500).json({msg:'Sorry, error'});
    }else {
    res.json({
    msg:"your data was saved"
    });
    }
    });
    
    })
    

/*const createBook = ((req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
*/
/*const createBook = ((req, res) => {
    const newBook = {
        id: books.length + 1,
        name: req.body.name,
        price: req.body.price,
        qte: req.body.qte
    }
    
   // books.push(newBook)
   // res.status(201).json(newBook)

    
})
*/


const updateBook = ((req, res) => {
  Book.findOneAndUpdate({ id: req.params.BookID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Book not found' }))
})



const deleteBook = ((req, res) => {
    const id = Number(req.params.bookID)
    const index = books.findIndex(book => book.id === id)
    books.splice(index,1)
    res.status(200).json('Book deleted')
})
module.exports = {

    getBooks,
    getBook,
    createBook,
   updateBook,
   deleteBook
}