import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{
   let postsElement = props.posts.map( (post, index) => <Post message = {props.posts[index].message} likeCount = {props.posts[index].likeCount}/>)

  return (
     <div className = {styles.myPosts}>
         {postsElement}
        <div className = {styles.form}>
        <textarea>
        </textarea>
        <div>
          <button>add Post</button>
        </div>
        </div>
     </div>
  )
}

export default MyPosts;