import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import * as axios from 'axios';

const MyPosts = (props) =>{
   let state = props.state;
   let postsElement = state.map( post => <Post message = {post.message} likeCount = {post.likeCount}/>)

   let newPostElement = React.createRef();
   let photo = React.createRef();
   const addPost = () =>{
      props.addPostContainer();
   }
   const onPostChange = () => {
      let text = newPostElement.current.value;
      props.onPostChangeContainer(text);
   }

  return (
       <div className = {styles.myPosts}>
         {postsElement}
        <div className = {styles.form}>
        <textarea onChange ={onPostChange} ref = {newPostElement} value = {props.newPostText}/>
        <div>
          <button onClick = {addPost}>add Post</button>
        </div>
        </div>
     </div>
  )
}

export default MyPosts;