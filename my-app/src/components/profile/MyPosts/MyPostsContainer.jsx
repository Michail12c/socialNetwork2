import React from 'react';
import { addPostActionCreator, onUpDateActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) =>{
  let state = props.store.getState();
   const addPost = () =>{
      props.store.dispatch(addPostActionCreator());
   }
   const onPostChange = (text) => {
      props.store.dispatch(onUpDateActionCreator(text));
   }

  return (
  <MyPosts addPostContainer = {addPost} onPostChangeContainer = {onPostChange} state = {state.profilePage.posts}/>
  )
}

export default MyPostsContainer;