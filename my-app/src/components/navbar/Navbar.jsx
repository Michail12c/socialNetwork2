import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
  return (
    <div className ={styles.navbar}>
       <div className = {styles.reference}>
         <NavLink to="/Profile" activeClassName = {styles.active}>Profile</NavLink>
       </div>
       <div className = {styles.reference}>
         <NavLink to="/Dialogs" activeClassName = {styles.active}>Messages</NavLink>
       </div>
       <div className = {styles.reference}>
         <NavLink to = "/Images" activeClassName = {styles.active}>Images</NavLink>
       </div>
       <div className = {styles.reference}>
         <NavLink to = "/Users" activeClassName = {styles.active}>Users</NavLink>
       </div>
       <div className ={styles.reference}>
         <a href="">News</a>
       </div>
       <div className ={styles.reference}> 
         <a href="">Music</a>
       </div>
       <div className = {`${styles.reference} ${styles.lastRef}`}>
         <NavLink to = "/Settings" activeClassName = {styles.active}>Settings</NavLink>
       </div>
    </div>
  )
}
export default Navbar;