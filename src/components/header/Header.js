import React, { Component } from 'react'
import SearchForm from './searchForm/SearchForm';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Google Book Search</h1>
        <SearchForm
          setSearch={this.props.setSearch}
          list={this.props.list}
          filterPrint={this.props.filterPrint}
          filterBook={this.props.filterBook}
        />
      </div>
    )
  }
}

export default Header
