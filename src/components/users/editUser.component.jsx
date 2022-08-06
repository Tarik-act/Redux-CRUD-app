import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate, useLocation } from 'react-router-dom';

import { userUpdated } from './userSlice';

export const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace('/edit-user/', ''));
  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userUpdated({
          id: userId,
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
        <h1>Edit User</h1>
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
          <label htmlFor='nameInput'>Email</label>
          <input
            type='email'
            className='u-full-width'
            placeholder='Enter Email'
            id='nameInput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && error}
          <button onClick={handleClick} className='button-primary'>
            Save user
          </button>
        </div>
      </div>
    </div>
  );
};
