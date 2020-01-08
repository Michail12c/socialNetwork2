import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {

  const dialogsElement = props.message.dialogs.map( dialogs => <DialogItem 
  id = {dialogs.id} 
  name = {dialogs.name}/> ) 

  const messagesElement = props.message.messages.map( message => <Message 
  message = {message.message}/>)

  return (
    <div className = {styles.dialogs}>
      <div className = {styles.content}>
        <div>
           {dialogsElement}
        </div>
        <div>
          {messagesElement}
        </div>
      </div>
    </div>
  )
}

export default Dialogs; 