import React, { Component } from 'react'
import ListItem from './listItem/ListItem';
import './BooksList.css';

export class BooksList extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookList: []
    }
  }

  componentDidMount(){
    this.props.list.map(item => {
      console.log(item)
      this.setState({
        bookList:[...this.state.bookList, item]
      })
    })
  }
  
  render() {
    const finishedList = this.props.list.map(item => {
      return <ListItem details={item} />
    })
    // console.log(finishedList);

    return (
      <ul className="BooksList">
        {finishedList}
      </ul>
    )
  }
}

export default BooksList
