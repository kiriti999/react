import React, { useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setpeople] = useState(data);
  const removePerson = (id) => {
    return setpeople(people.filter((person) => person.id !== id))
  }

  return (
    <div>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson}></List>
    </div>
  )
};

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} removePerson={removePerson}></SinglePerson>
      })}
    </div>
  )
}

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <>
      <div className="item">
        <h4>{name}</h4>
        <button className="btn" onClick={() => removePerson(id)}>Remove person</button>
      </div>
    </>
  )
}

export default PropDrilling;
