import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfUpdated: PropTypes.func.isRequired
  }

  render(){

    const {book, onShelfUpdated} = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => onShelfUpdated(book, e.target.value)} value={book.shelf || 'none'}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              {(book.shelf) &&
                <option value="none">None</option>
              }
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{(book.authors && book.authors.length > 1) ? book.authors.join(',') : book.authors }</div>
      </div>
    )
  }

}

export default Book
