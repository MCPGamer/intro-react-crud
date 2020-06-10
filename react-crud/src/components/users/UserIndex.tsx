import React from 'react';
import {User} from '../../models/User';

type Props = {
  users: User[]
};

export const UserIndex: React.FC<Props> = (props) => {
  return (
      <table>
        <thead>
        <tr>
          <th>Forename</th>
          <th>Surname</th>
          <th>Birthday</th>
          <th>Active</th>
        </tr>
        </thead>
        <tbody>
        {props.users.map((u) => (
            <tr>
              <td>{u.forename}</td>
              <td>{u.surname}</td>
              <td>{u.birthday}</td>
              <td>{u.active}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};
