const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store books
let books = [];

// Route to add a new book
app.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).send({ message: 'Book added successfully', book: newBook });
});

// Route to get all books (optional)
app.get('/books', (req, res) => {
    res.send(books);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
