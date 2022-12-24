import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h2>{people.length} birthdays today</h2>
        <List people={people}></List>
        <button onClick={() => console.log('you clicked me')}>clear all</button>
      </section>
    </main>
  )
}

export default App;
