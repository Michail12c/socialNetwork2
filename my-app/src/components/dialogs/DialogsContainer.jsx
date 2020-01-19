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
   }
}
const mapDispatchToProps = (dispatch) =>{
   return {
     sendMessage: (newMessageText) => {
      dispatch(sendMessageCreator(newMessageText))
     }
   }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)