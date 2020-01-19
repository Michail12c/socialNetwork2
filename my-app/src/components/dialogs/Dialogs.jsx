import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators';
import { Textarea } from '../utils/FormsControls';

let maxLength20 =  maxLengthCreator(20);

const Dialogs = (props) => {
  const dialogsElement = props.nameMessages.map(dialogs => <DialogItem
    id={dialogs.id}
    name={dialogs.name} />)

  const messagesElement = props.messages.map(message => <Message
    message={message.message} />)

  const onSendMessageClick = (values) => {
    props.sendMessage(values.newMessageText);
  }
  if (!props.isAuth) return <Redirect to='/login' />
  return (
    <div className={styles.dialogs}>
      <div className={styles.content}>
        <div>
          {dialogsElement}
        </div>
        <div className={styles.message}>
          {messagesElement}
          <div>
            <DialogReduxForm onSubmit = {onSendMessageClick }/>
           </div>
          </div>
        </div>
      </div>
      )
    }
let dialogForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
        <div>
          <Field component = {Textarea} 
          name = {'newMessageText'}
          validate = {[required,maxLength20 ]}
          />
        </div>
        <div>
          <button>send message</button>
        </div>
      </form>
      )
    }
  const DialogReduxForm = reduxForm({
    form: 'dialog'
  })(dialogForm)  
    
    
export default Dialogs; 