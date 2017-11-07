import React from 'react'
import { Link } from 'react-router-dom'
import ShelfList from '../ShelfList'
import './BookList.css'

class BookList extends React.Component {

  render() {

    const {books} = this.props
    const shelfs = Array.from(new Set(books.map((item)=> item.shelf)))

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ShelfList onShelfUpdated={this.props.onShelfUpdated} books={books} shelfs={shelfs} />
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )

  }

}

export default BookList;
