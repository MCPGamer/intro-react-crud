import React from 'react';
import './Dialog.css';

type Props = {
  open:boolean;
}

export const Dialog: React.FC<Props> = (props) => {
    return props.open ? <div className='dialog'>{props.children}</div> : null;
};
