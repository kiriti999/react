import React, { useState } from 'react';
import data from './data';
function App() {
  let [count, setcount] = useState(0);
  const [text, settext] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count <= 0) {
      count = 1
    }
    if (count > 8) {
      count = 8
    }
    settext(data.slice(0, parseInt(count)));
  }

  return (
    <section className='section-center'>
      <h3>Lorem ipsum</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount" id=''>Paragraphs:</label>
        <input type="number" name="amount" value={count} onChange={(e) => setcount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default App;
