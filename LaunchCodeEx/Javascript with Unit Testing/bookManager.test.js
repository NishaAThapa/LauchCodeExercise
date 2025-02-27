// __tests__/bookManager.test.js

const { addBook, removeBook, updateBookTitle, findBooksByAuthor, books } = require("../bookManager");

describe("Book Manager Functions", () => {

  beforeEach(() => {
    // Clear the books array before each test to ensure tests are isolated
    books.length = 0;
  });

  describe("addBook", () => {
    test("should add a new book to the books array", () => {
      addBook("JavaScript for Beginners", "John Doe");
      expect(books).toHaveLength(1); // Check that one book is added
      expect(books[0]).toEqual({ title: "JavaScript for Beginners", author: "John Doe" });
    });
  });

  describe("removeBook", () => {
    test("should remove a book from the books array", () => {
      addBook("JavaScript Basics", "Jane Doe");
      removeBook("JavaScript Basics");
      expect(books).not.toContainEqual({ title: "JavaScript Basics", author: "Jane Doe" });
    });

    test("should throw an error if the book is not found", () => {
      expect(() => removeBook("Nonexistent Book")).toThrow("Book not found");
    });
  });

  describe("updateBookTitle", () => {
    test("should update the title of an existing book", () => {
      addBook("Old Title", "Author Name");
      const updatedBook = updateBookTitle("Old Title", "New Title");
      expect(updatedBook.title).toBe("New Title");
    });

    test("should throw an error if the book does not exist", () => {
      expect(() => updateBookTitle("Nonexistent Title", "Any Title")).toThrow("Book not found");
    });
  });

  describe("findBooksByAuthor", () => {
    test("should return books by the specified author", () => {
      addBook("JavaScript for Beginners", "John Doe");
      const foundBooks = findBooksByAuthor("John Doe");
      expect(foundBooks).toContainEqual({ title: "JavaScript for Beginners", author: "John Doe" });
    });
  });

});
