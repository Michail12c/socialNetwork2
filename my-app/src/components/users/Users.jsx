import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../icon/user.png';

const Users = (props) => {
  let pageCalculateSize = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 20; i ++){
    pages.push(i);
  }
    return (
      <div className = {styles.users}>
        <div>
        {   pages.map( page => {
           return <span className = { props.currentPage === page && styles.selected}
           onClick = { () => {props.onChangePage(page)}}
           >{page}</span>
          }) 
        } 
        {/* написати довантаження нових даних по сторінках */}
        ... {pageCalculateSize}
        
        </div>
        {
          props.users.map( user => <div className={styles.usersView}>
            <div className = {styles.icon}>
              <img src={user.photos.small != null ? user.photos.small : userPhoto } alt="icon"/>
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