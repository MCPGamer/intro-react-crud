import React from 'react';
import {User} from '../models/User';
import {UserIndex} from '../components/users/UserIndex';

export const UsersContainer: React.FC = () => {
  const users: User[] = [
    {forename: 'Hana', surname: 'Song', active: true, birthday: new Date('01/01/2001').toISOString()},
    {forename: 'Angela', surname: 'Ziegler', active: true, birthday: new Date('05/01/1997').toISOString()},
    {forename: 'Jack', surname: 'Morrison', active: true, birthday: new Date('08/02/1993').toISOString()},
    {forename: 'Gabriel', surname: 'Reyes', active: false, birthday: new Date('01/04/1995').toISOString()}
  ];

  return (
    <div>
      <UserIndex users={users}/>
    </div>
  );
};
