import axios from "axios";
// endpoint from googlebooks api
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // calls the Google Books API and retrieves books based on user input
  searchBooks: (query) => axios.get(BaseUrl + query),
  // get all books saved in the database
  getBooks: () => axios.get("/api/books"),
  // saves a book to the database
  saveBook: (bookData) => axios.post("/api/books", bookData),
  // deletes a book with the given id from the database
  deleteBook: (id) => axios.delete("api/books/" + id),
};
