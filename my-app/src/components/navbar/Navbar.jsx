import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () =>{
  return (
    <div className ={styles.navbar}>
       <div className = {styles.reference}>
         <a href="">Profile</a>
       </div>
       <div className = {styles.reference}>
         <a href="">Messages</a>
       </div>
       <div className ={styles.reference}>
         <a href="">News</a>
       </div>
       <div className ={styles.reference}> 
         <a href="">Music</a>
       </div>
       <div className = {`${styles.reference} ${styles.lastRef}`}>
         <a href="">Settings</a>
       </div>
    </div>
  )
}
export default Navbar;