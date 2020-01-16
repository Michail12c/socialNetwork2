import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../icon/user.png';
import Preloader from '../common/Preloader';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
  let pageCalculateSize = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 20; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.users}>
      {props.isFetching ? <Preloader /> : null}
      <div>
        {pages.map(page => {
          return <span className={props.currentPage === page && styles.selected}
            onClick={() => { props.onChangePage(page) }}
          >{page}</span>
        })
        }
        {/* написати довантаження нових даних по сторінках */}
        ... {pageCalculateSize}

      </div>
      {
        props.users.map(user => <div className={styles.usersView}>
          <div className={styles.icon}>
            <NavLink to={'/profile/' + user.id} >
              <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="icon" />
            </NavLink>
            <div className={styles.iconName}>
              {user.name}
              <div>
                {
                  user.followed ?
                 

                    <button disabled = {props.toggleFollowing.some(id => id === user.id)} onClick={() => {
                      props.toggleFollowingProgress(true, user.id)
                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                        withCredentials: true,
                        headers:{
                          'API-KEY': '6afcedda-8491-4257-96dc-f8dee8dc5f18'
                        }
                      }).then(response => {
                       if(response.data.resultCode === 0){
                        props.nofollow(user.id)
                        
                       }
                       props.toggleFollowingProgress(false, user.id)
                      })
                      
                    }}>Nofollow</button>


                    : <button disabled = {props.toggleFollowing.some(id => id === user.id)} onClick={() => {
                      props.toggleFollowingProgress(true, user.id)
                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                        withCredentials: true,
                        headers:{
                          'API-KEY': '6afcedda-8491-4257-96dc-f8dee8dc5f18'
                        }
                      }).then(response => {
                       if(response.data.resultCode === 0){
                        props.follow(user.id)
                       }
                       props.toggleFollowingProgress(false, user.id)
                      })
                      
                   }}> Follow</button>
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