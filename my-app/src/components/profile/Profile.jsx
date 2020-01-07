import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) =>{
  return (
    <div className = {styles.profile}>
        <MyPosts posts = {props.posts.posts}/> 
    </div>
  )
}
export default Profile;