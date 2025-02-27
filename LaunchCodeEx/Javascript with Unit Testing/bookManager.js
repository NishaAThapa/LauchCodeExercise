// bookManager.js

let books = [];

const addBook = (title, author) => {
  const newBook = { title, author };
  books.push(newBook);
};

const removeBook = (title) => {
  const bookIndex = books.findIndex((book) => book.title === title);
  if (bookIndex === -1) {
    throw new Error('Book not found');
  }
  books.splice(bookIndex, 1);
};

const updateBookTitle = (oldTitle, newTitle) => {
  const book = books.find((book) => book.title === oldTitle);
  if (!book) {
    throw new Error('Book not found');
  }
  book.title = newTitle;
  return book;
};

const findBooksByAuthor = (author) => {
  return books.filter((book) => book.author === author);
};

module.exports = {
  addBook,
  removeBook,
  updateBookTitle,
  findBooksByAuthor,
  books, // Exporting books for testing purposes
};
