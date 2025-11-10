let books = require('../data/booksData');

exports.getAllBooks = (req, res) => {
  res.status(200).json({
    status: "success",
    data: books
  });
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ status: "fail", message: "Book not found" });
  }

  res.status(200).json({ status: "success", data: book });
};

exports.createBook = (req, res) => {
  const { title, author, year } = req.body;

  if (!title) return res.status(400).json({ status: "fail", message: "Field 'title' wajib diisi" });
  if (!author) return res.status(400).json({ status: "fail", message: "Field 'author' wajib diisi" });

  const newBook = {
    id: books.length + 1,
    title,
    author,
    year: year || new Date().getFullYear()
  };

  books.push(newBook);
  res.status(201).json({ status: "success", data: newBook });
};

exports.updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, year } = req.body;
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ status: "fail", message: "Book not found" });
  }

  if (!title || !author) {
    return res.status(400).json({ status: "fail", message: "Field 'title' dan 'author' wajib diisi" });
  }

  books[index] = { id, title, author, year };
  res.status(200).json({ status: "success", data: books[index] });
};

exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ status: "fail", message: "Book not found" });
  }

  books.splice(index, 1);
  res.status(204).send();
};

exports.getInfo = (req, res) => {
  res.status(200).json({
    status: "success",
    service: "Books API - UTS Web Service Engineering",
    author: "Husin (230104040122)",
    resource: "books",
    principles: 7
  });
};
