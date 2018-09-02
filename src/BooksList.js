import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {

  render() {
    const { books, onUpdateShelf } = this.props

    
    let want = books.filter((book) => book.shelf === 'wantToRead')
    let read = books.filter((book) => book.shelf === 'read')
    let curt = books.filter((book) => book.shelf === 'currentlyReading')

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                   {curt.map((book) => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        onUpdateShelf={onUpdateShelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {want.map((book) => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        onUpdateShelf={onUpdateShelf}
                       />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map((book) => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        onUpdateShelf={onUpdateShelf}
                       />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
