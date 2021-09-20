import React, { createContext, useState,useEffect } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {

  const [books, setBooks] = useState({
      authtoken : "0",
      isauth : false
  });

  const addBook = (ss,dd) => {
    setBooks({authtoken : ss , isauth : dd });
  };
//   const removeBook = (id) => {
//     setBooks(books.filter(book => book.id !== id));
//   }

  return (
    <BookContext.Provider value={{ books, newtoken : addBook  }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;