import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return(
    <div className = {styles.header}>
       <div className = {styles.logo}>
          <img src="https://img0.liveinternet.ru/images/attach/b/3/27/350/27350775_256px.png" alt="logo"/>
       </div>
       <div className = {styles.slogan}>
          To continue is power ...
       </div>
    </div> 
  )
}
export default Header;