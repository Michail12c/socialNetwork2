import React, { useState } from 'react';
import Preloader from '../common/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../icon/user.png'
import { Input } from '../utils/FormsControls';
import ProfileDataForm from './ProfileDataForm';
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
          {isOwner && <input type = {'file'} onChange = {onMainPhotoSelected}/>}
        </div>
        {
        
           editMode ? <ProfileDataForm profile = {profile}/>  : <ProfileData profile = {profile} isOwner = {isOwner} goToEditMode = {() => {setEditMode(true)}}/>
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
     <div>
       {isOwner && <div><button onClick = {goToEditMode}>edit</button></div>}
       <div className = {styles.myName}>
        {profile.fullName}
        </div>
         <b>contact</b>{Object.keys(profile.contacts).map(key => {
            return <Contact contactTitle = {key} contactValue = {profile.contacts[key]}/>
         })}
     </div>
  )
} 

 
const Contact = ({contactTitle, contactValue}) => {
   return <div><b>{contactTitle}</b>{contactValue}</div>
}

export default ProfileInfo;