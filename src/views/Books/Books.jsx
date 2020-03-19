import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList';

function Books() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books')
      setData(result.data);
    };
    fetchData();
  }, []);
  
  return (
    <section id="books">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Books</h2>
            <hr className="line-dark" />
          </div>
        </div>
        <BookList books={data}/>
      </div>
    </section> 
  )
}


export default Books;
