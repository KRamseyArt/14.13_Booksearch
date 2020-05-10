import React, { Component } from 'react'
import Search from './search/Search';
import Filter from './filter/Filter';
import './SearchForm.css';

export class SearchForm extends Component {
  
  handleSubmit(e){
    e.preventDefault();
    // console.log(e.target);
    
    this.props.setSearch(
      e.target.searchbar.value,
      e.target.printType.value,
      e.target.bookType.value
      )
  }
  
  render() {
    return (
      <form
        className="SearchForm"
        onSubmit={e => this.handleSubmit(e)}
      >
        <Search
          setSearch={this.props.setSearch}
        />
        <Filter
          list={this.props.list}
          filterPrint={this.props.filterPrint}
          filterBook={this.props.filterBook}
        />
      </form>
    )
  }
}

export default SearchForm
