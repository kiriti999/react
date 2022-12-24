import React from 'react';
import Review from './Review';
import { FaGithubSquare } from 'react-icons/fa';
function App() {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h2>our reviews</h2>
          <Review></Review>
        </div>
      </div>
    </div>
  )
}

export default App;
