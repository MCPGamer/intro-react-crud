import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {UserIndex} from './UserIndex';

describe('UserIndex', () => {
  const renderUserIndex = (onDeleteMock: (id:number) => void, onEditMock: (id:number) => void) => {
    const users = [
      {id: 1, forename: 'Hana', surname: 'Song', active: true, birthday: new Date('01/01/2001').toISOString()},
      {id: 2, forename: 'Angela', surname: 'Ziegler', active: true, birthday: new Date('05/01/1997').toISOString()},
      {id: 3, forename: 'Jack', surname: 'Morrison', active: true, birthday: new Date('08/02/1993').toISOString()},
      {id: 4, forename: 'Gabriel', surname: 'Reyes', active: false, birthday: new Date('01/04/1995').toISOString()}
    ];

    return render(<UserIndex users={users} onDelete={onDeleteMock} onEdit={onEditMock}/>);
  };

  it('should render a table', () =>{
    const result = renderUserIndex(jest.fn, jest.fn);
    // @ts-ignore
    expect(result.container.querySelector('table').tagName).toBe('TABLE');
  });

  it('should call onDelete, when delete button is clicked with correct Id', () =>{
    const onDelete = jest.fn();
    const result = renderUserIndex(onDelete, jest.fn());
    const deleteButton = result.queryAllByText('Delete')[1];
    fireEvent.click(deleteButton);
    expect(onDelete).toBeCalledTimes(1);
    expect(onDelete).toBeCalledWith(2);
  });
});
