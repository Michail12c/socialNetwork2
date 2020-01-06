import React from 'react';
import styles from './Profile.module.css';

const Profile = () =>{
  return (
    <div className = {styles.profile}>
         <div className={styles.posts}>
           <div className={styles.item}>
             hello
           </div>
           <div className={styles.item2}>
             hello react
           </div>
         </div>
    </div>
  )
}
export default Profile;