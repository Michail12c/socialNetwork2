import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

  let state = props.store.getState();
  
  const onNewMessageBody = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }
  const onSendMessageClick = () => {
     props.store.dispatch(sendMessageCreator());
  }

  return (
        <Dialogs messageBody = {onNewMessageBody} 
                 sendMessage = {onSendMessageClick}  
                 messages = {state.dialogsPage.messages} 
                 nameMessages = {state.dialogsPage.dialogs}
                 newTextMessage = {state.dialogsPage.newTextMessage}/>
    )
}

export default DialogsContainer; 