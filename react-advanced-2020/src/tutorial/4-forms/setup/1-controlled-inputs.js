import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState('')
  const [email, setemail] = useState('')
  const [people, setpeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email };
      setpeople((people) => [...people, person]);
      setfirstName('');
      setemail('');
    } else {
      console.log('empty values');
    }
  }

  return (
    <article>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="firstName" name='firstName' value={firstName} onChange={(e) => setfirstName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name='email' value={email} onChange={(e) => setemail(e.target.value)} />
        </div>
        <button className="btn" type='submit'>Add person</button>
      </form>
      {people.map((person, i) => {
        const { firstName, email } = person;
        const id = new Date().getTime().toString();
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </article>
  )
};

export default ControlledInputs;
