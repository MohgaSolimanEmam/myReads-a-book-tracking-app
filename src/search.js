import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DebounceInput from 'react-debounce-input'
import BookShelf from './BooksShelf'

class SearchBook extends Component {
    constructor() {
        this.props.emptybooks()
    }
    render() {
        return (
        <div className="search-books">
            <div className="search-books-bar">


                <Link
                    className="close-search"
                    to="/">
                    Close
                    </Link>
                <div className="search-books-input-wrapper">
                    <DebounceInput
                        debounceTimeout={125}
                        element="input"
                        type="text"
                        value={this.props.books.string}
                        onChange={this.props.searchQuery}
                        placeholder="Search by title or author"
                    />

                </div>
            </div>
            <div className="search-books-results">
                    <BookShelf handlupdate={this.props.handlupdate} shelf="Search Results" books={this.props.books} />
            </div>
            </div>
        )
    }
}

export default SearchBook;