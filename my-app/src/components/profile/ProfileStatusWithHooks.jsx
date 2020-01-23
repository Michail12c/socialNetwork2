import React, { useState, useEffect } from 'react';
import styles from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

 let [editMode, setEditMode] = useState(false);
 let [status, setStatus] = useState(props.status);
 
 useEffect(() => {
   setStatus(props.status)
 }, [props.status] );

 const activateEditMode = () => {
   setEditMode(true);
 }
 
 const deactivateEditMode = () => {
  setEditMode(false);
  props.updateProfileThunk(status);
}
 const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className = {styles.profileStatus}>
    {!editMode &&
    <div >
      <span onDoubleClick = {activateEditMode}>{props.status || '---' }</span> 
    </div>
    }
    {editMode &&
    <div>
       <input onChange = {onStatusChange}  type="text" autoFocus = {true} onBlur = {deactivateEditMode}/>
    </div>
   } 
  </div>
  )
}

export default ProfileStatusWithHooks;