import React, {useState} from 'react';
import {User} from '../models/User';
import {UserIndex} from '../components/users/UserIndex';
import {UserForm} from '../components/users/UserForm';
import {Dialog} from '../components/Dialog';

export const UsersContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
        {id: 1, forename: 'Hana', surname: 'Song', active: true, birthday: new Date('01/01/2001').toISOString()},
        {id: 2, forename: 'Angela', surname: 'Ziegler', active: true, birthday: new Date('05/01/1997').toISOString()},
        {id: 3, forename: 'Jack', surname: 'Morrison', active: true, birthday: new Date('08/02/1993').toISOString()},
        {id: 4, forename: 'Gabriel', surname: 'Reyes', active: false, birthday: new Date('01/04/1995').toISOString()}
      ]
  );

  const [formKey, setFormKey] = useState(0);
  const [currentUser, setCurrentUser] = useState<User>();
  const [isDialog, setIsDialog] = useState(false);

  const resetForm = () => {
    setCurrentUser(undefined);
  };

  const rerenderForm = () => {
    setFormKey(new Date().getTime());
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleSubmit = (user: User) => {
    if (currentUser) {
      // update
      setUsers(users.map((u) => u.id === user.id ? user : u));
    } else {
      // create
      setUsers([...users, user]);
    }
    resetForm();
    rerenderForm();
    toggleDialog();
  };

  const handleEdit = (id: number) => {
    setCurrentUser(users.find((u) => u.id === id));
    rerenderForm();
    toggleDialog();
  };

  const handleCancel = () => {
    resetForm();
    rerenderForm();
    toggleDialog();
  };

  const toggleDialog = () => {
    setIsDialog(!isDialog);
  };

  return (
      <div>
        <button onClick={toggleDialog}>create user</button>
        <Dialog open={isDialog}>
          <UserForm onSubmit={handleSubmit} key={formKey} initialUser={currentUser} onCancel={handleCancel}/>
        </Dialog>
        <UserIndex users={users} onDelete={handleDelete} onEdit={handleEdit}/>
      </div>
  );
};
