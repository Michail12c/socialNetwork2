import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) =>{
  return (
    <div className = {styles.profile}>
        <MyPosts posts = {props.posts.posts} 
         newPostText = {props.posts.newPostText}
         addPost = {props.addPost} 
         onUpdateChange = {props.onUpdateChange}/> 
    </div>
  )
}
export default Profile;