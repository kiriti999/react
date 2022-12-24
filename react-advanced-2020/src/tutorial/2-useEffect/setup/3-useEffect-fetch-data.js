import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  // let users;
  useEffect(() => {
    console.log('use effect');
    getUsers();
  }, [])

  return (
    <>
      <div className='users'>
        <div>
          <h2>github users</h2>
        </div>
        <br />
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}></img>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </div>
    </>
  )
};

export default UseEffectFetchData;
