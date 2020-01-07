import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {

  const dialogsElement = props.message.dialogs.map( (dialogs, index) => <DialogItem 
  id = {props.message.dialogs[index].id} 
  name = {props.message.dialogs[index].name}/> ) 

  const messagesElement = props.message.messages.map( (message, index) => <Message 
  message = {props.message.messages[index].message}/>)

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