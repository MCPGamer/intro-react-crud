import React from 'react';
import './Dialog.css';

interface Props {
  open:boolean;
}

export class Dialog extends React.Component<Props>{
  public render(){
    return this.props.open ? <div className='dialog'>{this.props.children}</div> : null;
  }
}
