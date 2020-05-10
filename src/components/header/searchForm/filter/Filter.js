import React, { Component } from 'react'
import PrintType from './printType/PrintType';
import BookType from './bookType/BookType';
import './Filter.css'

export class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <PrintType
          list={this.props.list}
          filterPrint={this.props.filterPrint}
        />
        <BookType
          list={this.props.list}
          filterBook={this.props.filterBook}
        />
      </div>
    )
  }
}

export default Filter
