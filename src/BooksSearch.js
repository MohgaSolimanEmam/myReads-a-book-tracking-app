import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BooksSearch extends React.Component {

  state = {
    books: []
  }

  handlquery(handledquery) {
      this.setState({ books: [] })

      if (handledquery === '') {
          return
      }

      BooksAPI.search(handledquery).then((response) => {
          if (!response.error) {
              let books = response.map((bookmap) => {

                  let currentBook = this.props.currentBooks.filter((currentBook) => currentBook.id === bookmap.id)[0]

                  if (currentBook) {
                      bookmap.shelf = currentBook.shelf
                  }

                  return bookmap
              })

              this.setState({ books: books })
          }
      })
  }

  handlshelf = (book, shelf) => {
    this.setState((state) => ({
      books: state.books.map((bookmap) => {
          if (bookmap.id === book.id) {
              bookmap.shelf = shelf
        }

          return bookmap
      })
    }))

    let curt = this.props.currentBooks.filter((curt) => curt.id === book.id)[0]

    if (curt === false) {
        let newBook = this.state.books.filter((newBook) => newBook.id === book.id)[0]
      this.props.addBook(newBook)
    }

    this.props.onUpdateShelf(book, shelf)
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.handlquery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onUpdateShelf={this.handlshelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksSearch
