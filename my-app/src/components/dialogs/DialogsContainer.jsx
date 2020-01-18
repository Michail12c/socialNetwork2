import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) =>{
   return{
     messages:state.dialogsPage.messages,
     nameMessages:state.dialogsPage.dialogs,
     newTextMessage:state.dialogsPage.newTextMessage,
   }
}
const mapDispatchToProps = (dispatch) =>{
   return {
     messageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
     },
     sendMessage: () => {
      dispatch(sendMessageCreator())
     }
   }
}
/* let dialogsRedirect = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(dialogsRedirect); */


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)