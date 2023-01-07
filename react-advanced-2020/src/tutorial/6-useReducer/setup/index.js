import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello'
}

const Index = () => {
  const [name, setname] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setname('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => { dispatch({ type: 'CLOSE_MODAL' }) }

  return (
    <div>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}></Modal>}
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        <button className="btn">Add</button>
      </form>
      {state.people.map((person, i) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>Delete</button>
          </div>
        )
      })}
    </div>
  )
};

export default Index;
