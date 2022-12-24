import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <>
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => { removeItem(id) }}>remove item</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => { setPeople([]) }}>clear items</button>
    </>
  );
};

export default UseStateArray;
