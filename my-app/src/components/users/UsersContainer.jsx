import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, nofollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import userPhoto from './../icon/user.png';

class UsersContainer extends React.Component {

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    }) 
  }
  onChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then( response => {
      this.props.setUsers(response.data.items);
    }) 
  }

  render () {
  let pageCalculateSize = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
  let pages = [];
  for (let i = 1; i <= 20; i ++){
    pages.push(i);
  }
 

    return (
      <Users totalUsersCount = {this.props.totalUsersCount}
       pageSize = {this.props.pageSize}
       currentPage = {this.props.currentPage}
       onChangePage = {this.onChangePage}
       users = {this.props.users}
       follow = {this.props.follow}
       nofollow = {this.props.nofollow}
      />
    )
 }
}



const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    nofollow: (userId) => {
      dispatch(nofollowAC(userId));
    },
    setUsers: (users) => {
      dispatch( setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch( setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch( setUsersTotalCountAC(totalCount) )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
