const { addBook, updateBookTitle, books } = require("../bookManager");

beforeEach(() => {
  // Reset the books array before each test
  // You can either reset it directly or reinitialize it as needed
  books.length = 0;
});

test("updateBookTitle should update the title of an existing book", () => {
  addBook("Old Title", "Author Name");
  const updatedBook = updateBookTitle("Old Title", "New Title");
  expect(updatedBook.title).toBe("New Title");
  expect(books.find((book) => book.title === "New Title")).toBeTruthy();
});

test("updateBookTitle should throw an error if the book does not exist", () => {
  expect(() => updateBookTitle("Nonexistent Title", "Any Title")).toThrow(
    "Book not found"
  );
});
