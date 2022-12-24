import React, { useState } from 'react';

const BookList = () => {
  const updateName = () => {
    setText('Hi');
  }
  const [text, setText] = useState('hello');
  const books = [{ id: 1, author: 'kiriti' }, { id: 2, author: 'komaragiri' }];
  const [bookValues, setBookValues] = useState(books);

  const clear = (id) => {
    setBookValues([])
  }

  const remove = (id) => {
    console.log('event', id);
    const newBooks = bookValues.filter((book) => book.id !== id);
    setBookValues(newBooks);
  }

  console.log(bookValues);

  return (
    <section>
      <h1>{text}</h1><br></br>
      {bookValues.map((book) => {
        return (
          <div key={book.id}>
            <Book key={book.id} {...book}></Book>
            <button onClick={() => remove(book.id)} className='btn' > remove</button>
          </div >
        )
      })}
      <button onClick={updateName} className='btn'>update</button>
      <button onClick={clear} className='btn'>clear</button>
    </section >
  )
};

const Book = (props) => {
  return (<h1> {props.author}</h1>)
}

export default BookList;
