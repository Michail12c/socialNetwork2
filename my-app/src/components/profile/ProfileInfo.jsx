import React, { useState } from 'react';
import Preloader from '../common/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../icon/user.png'
import { Input } from '../utils/FormsControls';
/* import ProfileStatus from './ProfileStatus'; */


const ProfileInfo = ({profile, status, updateProfileThunk, contacts, isOwner, savePhoto}) => {
  let [editMode, setEditMode] = useState(false);
console.log(profile)
  const onMainPhotoSelected = (e) => {
    if(e.target.files.length){
      savePhoto(e.target.files[0]);
    }
  }
  if(!profile){
    return <Preloader/>
  }
  return (
     <div className = {styles.profile}>
        <div>
          <img src={profile.photos.large || userPhoto} className = {styles.namePhoto}/>
          {/* {isOwner && <input type = {'file'} onChange = {onMainPhotoSelected}/>} */}
        </div>
        {
        
          <ProfileData profile = {profile} isOwner = {isOwner} goToEditMode = {() => {setEditMode(true)}}/>
          } 
        <ProfileStatusWithHooks status = {status} updateProfileThunk = {updateProfileThunk}/>
        {/*  <div className = {styles.myName}>
        {profile.fullName}
        </div>
        { <b>contact</b>{Object.keys(profile.contacts).map(key => {
            return <Contact contactTitle = {key} contactValue = {profile.contacts[key]}/>}
         })} */}
       
            
         <div>
        </div>
     </div>
  )
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return ( 
       <div >
         <div className = {styles.myName}> 
         <div>
         my name: <b>{profile.fullName}</b> 
         </div>
         <div>
         about me: <b> {profile.aboutMe}</b>
         </div>
         <div>
         discription of job: <b>{profile.lookingForAJobDescription}</b>
         </div>
   
         <b>contact</b>{Object.keys(profile.contacts).map(key => {
            return <Contact contactTitle = {key} contactValue = {profile.contacts[key]}/>
         })}
         </div>
     </div>
  )
} 

 
const Contact = ({contactTitle, contactValue}) => {
   return <div><b>{contactTitle}</b>{contactValue}</div>
}

export default ProfileInfo;