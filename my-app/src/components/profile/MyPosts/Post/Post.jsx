import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
  return (
    <div className={styles.post}>
    <div className={styles.item}>
      <img src="https://cdn4.vectorstock.com/i/1000x1000/37/58/hacker-character-avatar-icon-vector-11573758.jpg" alt="icon"/>
      name
      <div className = {styles.userName}>
        {props.message}
      <span>
         like {props.likeCount}
      </span>
      </div>
    </div>
   </div>
  )
}

export default Post;