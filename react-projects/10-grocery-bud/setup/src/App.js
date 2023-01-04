import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = (second) => {
  let list = localStorage.getItem('list');
  return list ? JSON.parse(list) : []

}

function App() {
  const [name, setname] = useState('')
  const [list, setlist] = useState(getLocalStorage())
  const [isEditing, setisEditing] = useState(false)
  const [editID, seteditID] = useState(null)
  const [alert, setalert] = useState({ show: false, msg: '', type: '' })

  const showAlert = (show = false, type = '', msg = '') => {
    setalert({ show, type, msg })
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      showAlert(false);
      setlist(
        list.map((item) => item.id === editID ? { ...item, title: name } : item)
      )
      setname('')
      seteditID(null)
      setisEditing(false)
      showAlert(true, 'success', 'Value changed')
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setlist([...list, newItem])
      showAlert(true, 'success', 'Item added to the list')
      setname('')
    }
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setlist([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item removed');
    const newList = list.filter(item => item.id !== id)
    setlist(newList);
  }

  const editItem = (id) => {
    const item = list.find(item => item.id == id)
    setisEditing(true);
    seteditID(id);
    setname(item.title);
  }

  return (
    <section className="section-center">
      <form action="" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}></Alert>}
        <h3>groceries</h3>
        <div className="form-control">
          <input type="text" placeholder='eg. eggs' value={name} onChange={(e) => setname(e.target.value)} />
          <button className="submit-btn" type='submit'>{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem}></List>
        </div>
      )}
      <button className="clear-btn" onClick={clearList}>clear items</button>
    </section>
  )
}

export default App
