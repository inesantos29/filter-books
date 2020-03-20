import React from 'react';

const BookList = ({books}) => (
  <div className="row book-list">
    {books.map((book,index) => (
      <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
        <div className="card mb-4">
          <img src={book.cover} className="card-img-top" alt="book-cover"/>
          <div className="card-body">
            <h5>{book.name}</h5>
            <p>{book.author}</p>
            <small>
               Published at: 
              <p className="text-muted">
                {book.published_at}
              </p>
            </small>
            <small>
              ISBN:
              <p className="text-muted">
                {book.isbn}
              </p>
            </small>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default BookList;
