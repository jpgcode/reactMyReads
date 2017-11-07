import React from 'react'
import Book from '../Book/Book'
import PropTypes from 'prop-types'

class ShelfList extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfUpdated: PropTypes.func.isRequired
  }

  render(){

    const {shelfs, books} = this.props;

    return (
      <div className="bookshelfs">
        {shelfs.map((shelf) => (
          <div key={shelf} className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.filter((item) => item.shelf === shelf).map((book)=>(
                  <li key={book.id}>
                    <Book onShelfUpdated={this.props.onShelfUpdated} book={book} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    )
  }

}

export default ShelfList
