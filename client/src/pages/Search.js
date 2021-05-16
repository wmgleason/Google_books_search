import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { BookList, BookListItem } from "../components/List";
import { Input, SearchButton } from "../components/Input";

class Search extends Component {
  // initiate state for the list of books retrieved from the Google books API and bookSearch value
  state = {
    books: [],
    bookSearch: "",
  };

  handleInputChange = (event) => {
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    // When the form is submitted, prevent the default behavior & update the books state
    event.preventDefault();

    // this calls the Google Books API and returns searched book
    API.searchBooks(this.state.bookSearch)
      .then((res) => {
        this.setState({ books: res.data.items }, function () {
          console.log(this.state.books);
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-12 sm-12">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for a Book"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col size="xs-12 sm-12">
                      <SearchButton
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </SearchButton>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              <BookList>
                {this.state.books.map((book) => {
                  return (
                    <BookListItem
                      key={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      link={book.volumeInfo.infoLink}
                      description={book.volumeInfo.description}
                      // if no image available then use Google Books generic image
                      image={
                        book.volumeInfo.imageLinks === undefined
                          ? "./public/google-books-logo.png"
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
                    />
                  );
                })}
              </BookList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
