import React from 'react'
import ReactDOM from 'react-dom'
import ItemList from './ItemList'

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/

it('renders 3 shelves of books', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ItemList />, div)
})
