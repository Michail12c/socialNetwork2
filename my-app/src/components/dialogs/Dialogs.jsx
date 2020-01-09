import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/state';

const Dialogs = (props) => {
  
  let newMessageText = props.message.newTextMessage;
  const dialogsElement = props.message.dialogs.map( dialogs => <DialogItem 
  id = {dialogs.id} 
  name = {dialogs.name}/> ) 

  const messagesElement = props.message.messages.map( message => <Message 
  message = {message.message}/>)

  const onNewMessageBody = (event) => {
    let body = event.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  }
  const onSendMessageClick = () => {
     props.dispatch(sendMessageCreator());
  }

  return (
    <div className = {styles.dialogs}>
      <div className = {styles.content}>
        <div>
           {dialogsElement}
        </div>
        <div>
          {messagesElement}
          <div>
            <div>
              <textarea 
              placeholder = "Enter your message"
              value = {newMessageText }
              onChange = {onNewMessageBody}></textarea>
            </div>
            <div>
              <button onClick = {onSendMessageClick}>send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs; 