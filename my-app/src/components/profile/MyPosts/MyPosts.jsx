import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, onUpDateActionCreator } from '../../redux/state';

const MyPosts = (props) =>{
   let postsElement = props.posts.map( post => <Post message = {post.message} likeCount = {post.likeCount}/>)

   let newPostElement = React.createRef();
   const addPost = () =>{
      let text = newPostElement.current.value;
      props.dispatch(addPostActionCreator());
   }
   const onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(onUpDateActionCreator(text));
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