import React from 'react';
import Header from './components/header/Header';
import BooksList from './components/bookslist/BooksList';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBooks: [],
      searchTerm: "",
      filterPrintType: null,
      filterBookType: null
    }
  }

  searchBooks(searchTerm, printType, bookType){
    const apiKey= "AIzaSyDmqV2Y0i6-0t9OgIMpaFtWrIiYKAgkzr8";
    
    if(searchTerm){
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}${printType ? "&printType=" + printType : ""}${bookType ? "&filter=" + bookType : ""}&key=${apiKey}`)
        .then(res => {
          if(!res.ok){
            throw new Error();
          }
          return res.json();
        })
        .then(data => {
          // console.log(data);
          const books = Object.keys(data.items)
            .map(key => data.items[key])

          books.forEach(book => {
            this.setState({
              listOfBooks: [...this.state.listOfBooks, book]
            })
            // console.log(this.state.listOfBooks)
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  setSearch(searchTerm, printType = null, bookType = null){
    this.searchBooks(searchTerm, printType, bookType);
  }
  
  render(){
    // console.log(this.state.listOfBooks);
    return (
      <div className="App">
        <Header
          setSearch={term => this.setSearch(term)}
          list={this.state.listOfBooks}
          filterPrint={this.state.filterPrintType}
          filterBook={this.state.filterBookType}
        />
        {this.state.listOfBooks.length > 0
        ? <BooksList list={this.state.listOfBooks} />
        : <h3>Please enter a search term</h3>}
      </div>
    );
  }
}

export default App;
