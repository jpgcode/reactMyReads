import React from 'react'
import './Search.css'
import Book from '../Book'
import * as BooksAPI from '../../utils/BooksAPI'
import { Link } from 'react-router-dom'

class Search extends React.Component {

  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.updateBooks(query);
  }

  updateBooks = (query) => {
    if(query) {
      BooksAPI.search(query).then(res => (res) ? this.setState({showingBooks: res}) : this.setState({showingBooks: []}))
    }else{
      this.setState({showingBooks: []})
    }
  }

  render() {

    const { query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={(e) => this.updateQuery(e.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.showingBooks.map((book) => (
              <li key={book.id}>
                <Book onShelfUpdated={this.props.onShelfUpdated} book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
