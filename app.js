const express = require('express');
const app = express();
const booksRoutes = require('./routes/booksRoutes');
const booksController = require('./controllers/booksController');

app.use(express.json());

app.use('/api/books', booksRoutes);
app.get('/api/info', booksController.getInfo);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
