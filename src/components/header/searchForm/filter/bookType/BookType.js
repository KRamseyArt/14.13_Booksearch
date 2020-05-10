import React, { Component } from 'react'
import './BookType.css';

export class BookType extends Component {
  handleChange(e){
    console.log(e)
  }
  
  render() {
    return (
      <div className="BookType">
          <label htmlFor="bookType">Book Type:</label>
          <select
            name="bookType"
            onChange={e => this.handleChange(e.target.value)}
          >
            <option value={null}>All Types</option>
            <option value="partial">Partial Text</option>
            <option value="full">Full Text</option>
            <option value="free-ebooks">Free eBooks</option>
            <option value="pait-ebooks">Paid eBooks</option>
            <option value="ebooks">All eBooks</option>
          </select>
      </div>
    )
  }
}

export default BookType
