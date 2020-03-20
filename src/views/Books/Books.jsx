import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../SearchBar/SearchBar';
import BookList from './BookList';

const REACT_APP_API_URL = "https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books"; 

function Books() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
 
  useEffect(() => {
    setLoading(true);
    axios
      .get(REACT_APP_API_URL)
      .then(res => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  
  useEffect(() => {
    setFilteredBooks(
      books.filter(book =>
        book.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, books]);

  if (loading) {
    return <p>Loading books...</p>;
  }
  
  return (
    <section id="books">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Books</h2>
            <hr className="line-dark" />
            <SearchBar 
              onChange={e => setSearch(e.target.value)} 
            />
          </div>
        </div>
        <BookList books={filteredBooks}/>
      </div>
    </section> 
  )
}


export default Books;
