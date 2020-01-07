import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  return (
     <div className = {styles.myPosts}>
       <Post/>
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