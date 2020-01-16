import React from 'react';
import Preloader from '../common/Preloader';
import styles from './ProfileInfo.module.css';
import photo from './../icon/photo.jpg';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
     <div className = {styles.profile}>
        <div>
          <img src={/* props.profile.photos.large */  photo} alt="" width = '200' height = '200' />
        </div>
     </div>
  )
}

export default ProfileInfo;