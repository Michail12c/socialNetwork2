import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userFoto from './../icon/user.png';

const Users = (props) => {
  const getUser = () => {
    if(props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
        props.setUsers(response.data.items);
      }) 
    }
  }

  return (
    <div className = {styles.users}>
      <button onClick = {getUser}>Show users</button>
      {
        props.users.map( user => <div className={styles.usersView}>
          <div className = {styles.icon}>
            <img src={user.photos.small != null ? user.photos.small : userFoto } alt="icon"/>
            <div className = {styles.iconName}>
            {user.name}
            <div>
              {
                user.followed ? 
                <button onClick = {() => { props.nofollow(user.id)} }>Nofollow</button> 
                : <button onClick = {() => { props.follow(user.id)}}> Follow</button>
              }
            </div>
            </div>
          </div>
          <div className={styles.userInfo}>
            <div>
            {user.status}
            </div>
            <div>
              {'Country'}
            </div>
            <div>
              {'City'}
            </div>
          </div>
        </div>
          )
      }
    </div>
  )
}
export default Users;