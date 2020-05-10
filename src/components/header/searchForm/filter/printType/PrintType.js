import React, { Component } from 'react'
import './PrintType.css';

export class PrintType extends Component {
  filterList = e => {
    this.props.list.filter(item => {
      return 
    })
  }
  
  render() {
    return (
      <div className="PrintType">
        <label htmlFor="printType">Print Type:</label>
          <select
            name="printType"
            onChange={this.filterList}
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Mags</option>
          </select>
      </div>
    )
  }
}

export default PrintType
