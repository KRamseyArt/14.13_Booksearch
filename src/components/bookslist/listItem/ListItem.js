import React, { Component } from 'react'
import './ListItem.css';

export class ListItem extends Component {
  render() {
    // console.log(this.props.details.volumeInfo);
    const props = this.props.details;
    const authors = props.volumeInfo.authors
      ? props.volumeInfo.authors.map(author => "... " + author)
      : "Author not found";

    return (
      <li className="ListItem">
        <img src={props.volumeInfo.imageLinks.thumbnail} />
        <div className="details">
          <h3>{props.volumeInfo.title}</h3>
          <article>{authors}</article>
          <p><b>{props.saleInfo.retailPrice ? "$" + props.saleInfo.retailPrice.amount : "Price not found"}</b></p>
          <p>{props.volumeInfo.description}</p>
        </div>
      </li>
    )
  }
}

export default ListItem
