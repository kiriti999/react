import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setmenuItems] = useState(items);
  const getCategories = items.map((item) => item.category);
  const uniqueCategories = ['all', ...new Set(getCategories)];
  const [categories, setcategories] = useState(uniqueCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setmenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setmenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={uniqueCategories} filterItems={filterItems}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  )
}

export default App;
