import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUsers, userDelete } from './userSlice';

export const UserList = () => {
  const dispatch = useDispatch();

  const { usersMap } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDelete({ id }));
  };

  console.log(usersMap);
  return (
    <div className='container'>
      <div className='row'>
        <h1>Redux CRUD User app</h1>
      </div>
      <div className='row'>
        <div className='two columns'>
          <button
            className='button-primary'
            onClick={() => dispatch(fetchUsers())}
          >
            Load users
          </button>
        </div>
        <div className='two columns'>
          <Link to={'/add-user'}>
            <button className='button-primary'>Add users</button>
          </Link>
        </div>
      </div>
      <div className='row'>
        {loading ? (
          'Loading...'
        ) : (
          <table className='u-full-width'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersMap.length
                ? usersMap.map(({ id, name, email }, i) => (
                    <tr key={i}>
                      <td> {id} </td>
                      <td>{name}</td>
                      <td> {email} </td>
                      <td>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                        <Link to={`/edit-user/${id}`}>
                          <button>Edit</button>
                        </Link>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        )}{' '}
      </div>
    </div>
  );
};
