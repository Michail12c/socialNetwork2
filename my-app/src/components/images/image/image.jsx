import React from 'react';
import styles from './image.module.css';

const Image = (props) => {
  return (
    <div className = {styles.mainImage}>
       <div className = {styles.image}>
         <img src={props.url} alt="image"/>
       </div>
       <div>
         {props.title}
       </div>
    </div>
  )
}

export default Image;