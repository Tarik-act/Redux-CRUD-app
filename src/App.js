import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { UserList } from './components/users/userList.component';
import { AddUser } from './components/users/addUser.component';
import { EditUser } from './components/users/editUser.component';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
