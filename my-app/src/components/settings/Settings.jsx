import React from 'react';
import styles from './Settings.module.css';
import { useState } from 'react';
import EditProfile from './EditProfile';

const Settings = (props) => {

let [editMode, setEditMode] = useState(false);
let [editPhoto, setEditPhoto] = useState(false);
const activateEditMode = () => {
  setEditMode(true);
}
const savePhoto = () =>  {
  setEditPhoto(true);
}
const deactivateMode = () => {
  setEditMode(false)
}
const deactivateModePhoto = () => {
  setEditPhoto(false)
}
const onMainPhotoSelected = (e) => {
  if(e.target.files.length){
    props.savePhoto(e.target.files[0]);
  }
}

  return (
    <div className = {styles.settings}>
      { !editMode ? <div> <h3>Settings</h3>
      <div className = {styles.editProfile} onClick= {activateEditMode}>Edit Profile</div></div> : <EditProfile deactivateMode = {deactivateMode} saveProfile = {props.saveProfile}/>}
      {!editPhoto ? <div className = {styles.editProfile} onClick= {savePhoto}>Added photo</div> : <div> <input type = {'file'}  onChange = {onMainPhotoSelected}/> 
      <div><button onClick = {deactivateModePhoto}>Зберегти фото</button></div> </div>}
    </div>
  )
}

export default Settings;