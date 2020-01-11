import React from 'react';
import { addPostActionCreator, onUpDateActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
   return {
      state: state.profilePage.posts
   }
}
const mapDispatchToProps = (dispatch) =>{
   return {
      onPostChangeContainer: (text) => {
         dispatch(onUpDateActionCreator(text))
      },
      addPostContainer: () => {
         dispatch(addPostActionCreator())
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;