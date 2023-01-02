import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setcolor] = useState('')
  const [error, seterror] = useState(false)
  const [list, setlist] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setlist(colors);
      seterror(false);
      console.log('file: App.js:15 :: colors', colors);
    } catch (err) {
      seterror(true);
      console.log('file: App.js:17 :: err', err)
    }
  }

  return (
    <div>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setcolor(e.target.value)} placeholder='#'
            className={`${error ? 'error' : null}`} />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index}></SingleColor>
        })}
      </section>
    </div>
  )
}

export default App
