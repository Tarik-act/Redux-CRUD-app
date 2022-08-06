import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAdded } from './userSlice';

export const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  let usersAmount = useSelector((state) => state.users.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount++,
          name,
          email,
        })
      );

      setError(null);
      navigate('/');
    } else {
      setError('Fill all the fields');
    }
    setName('');
    setEmail('');
  };

  return (
    <div className='container'>
      <div className='row'>
        <h1>Add User</h1>
      </div>
      <div className='row'>
        <div className='three columns'>
          <label htmlFor='nameInput'>Name</label>
          <input
            type='text'
            className='u-full-width'
            placeholder='Enter Name'
            id='nameInput'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='emailInput'>Email</label>
          <input
            type='text'
            className='u-full-width'
            placeholder='Enter email address'
            id='emailInput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && error}
          <button onClick={handleClick} className='button-primary'>
            Add user
          </button>
        </div>
      </div>
    </div>
  );
};
