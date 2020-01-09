import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts';

const Profile = (props) =>{
  return (
    <div className = {styles.profile}>
        <MyPostsContainer store = {props.store} /> 
    </div>
  )
}
export default Profile;