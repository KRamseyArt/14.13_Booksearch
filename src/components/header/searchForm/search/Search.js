import React, { Component } from 'react'
import './Search.css';

export class Search extends Component {
  render() {
    return (
      <div 
        className="Search"
      >
        <label htmlFor="searchbar">Search:</label>
        <input
          type="text"
          id="searchbar"
          name="searchbar"
        />

        <button
          type="submit"
        >
          Search
        </button>
      </div>
    )
  }
}

export default Search
