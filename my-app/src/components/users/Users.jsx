import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../icon/user.png';
import Preloader from '../common/Preloader';
import { NavLink } from 'react-router-dom';



const Users = ({pageSize, currentPage, onChangePage, totalUsersCount, users, flag, pageReverse, ...props}) => {
   let pageCalculateSize = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
 
  let start =  flag;
  let finishNumber = start + 20;
  if (flag == finishNumber){
    start = finishNumber;
    finishNumber += 20;
    
  }
  if( finishNumber > pageCalculateSize){
    finishNumber = pageCalculateSize;
  }
  if(start < 1){
    start = 1;
  }

  for (let i = start; i <= finishNumber; i++) {
    pages.push(i);
  }
 
  return (
    <div className={styles.users}>
      {props.isFetching ? <Preloader /> : null}
      <div>
        {
          flag >= 10 && <button className = {styles.pageEnd} onClick = { () => {pageReverse(flag)}}>Назад</button>
        }
      {
        pages.map(page => {
          return <span key = {page} className={currentPage === page && styles.selected}
            onClick={() => { onChangePage(page) } }
          >{page}</span>
        })
      }
   ... {pageCalculateSize}
   
        

      </div>
      {
         users.map(user => <div className={styles.usersView}>
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
                      props.followThunkCreator(user.id);
    
             
                      
                    }}>Nofollow</button>


                    : <button disabled = {props.toggleFollowing.some(id => id === user.id)} onClick={() => {
                      props.nofollowThunkCreator(user.id);
              
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