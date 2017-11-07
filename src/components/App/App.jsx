import React from 'react'
import Search from '../Search/Search'
import BookList from '../BookList/BookList'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import * as BooksAPI from '../../utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount(){
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  updateShelf = (bookUpdated, shelf) => {
    BooksAPI.update(bookUpdated, shelf).then(() => {
      this.getBooks();
    })
  }

  render() {

    const { books } = this.state

    return (
      <Router>
        <div className="app">
            <Route exact path='/' render={() => (
              <BookList onShelfUpdated={this.updateShelf} books={books} title="My Reads" />
            )} />
            <Route path="/search" render={() => (
              <Search books={books} onShelfUpdated={this.updateShelf} />
            )} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
