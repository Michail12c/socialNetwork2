import React from 'react';
import Preloader from '../common/Preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
     <div className = {styles.profile}>
        <div>
          <img src={props.profile.photos.large}/>
        </div>
        <div className = {styles.myName}>
        {props.profile.fullName}
        </div>
     </div>
  )
}

export default ProfileInfo;