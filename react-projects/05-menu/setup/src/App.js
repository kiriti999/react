import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setmenuItems] = useState(items);
  const [categories, setcategories] = useState([])
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  )
}

export default App;
