import React from 'react';
import {User} from '../../models/User';

type Props = {
  users: User[]
  onDelete: (id:number) => void;
  onEdit: (id:number) => void;
};

export const UserIndex: React.FC<Props> = (props) => {
  return (
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Forename</th>
          <th>Surname</th>
          <th>Birthday</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.forename}</td>
              <td>{u.surname}</td>
              <td>{u.birthday}</td>
              <td><input type='checkbox' checked={u.active} disabled /></td>
              <td><button onClick={() => props.onDelete(u.id)}>Delete</button><button onClick={() => props.onEdit(u.id)}>Edit</button></td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};
