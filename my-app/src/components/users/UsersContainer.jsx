import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {  setUsers, setCurrentPage, setTotalUsersCount, isFetchingToggle, toggleFollowingProgress, getUsersThunkCreator, followThunkCreator, nofollowThunkCreator } from '../../redux/users-reducer';



class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }
  onChangePage = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
       followThunkCreator = {this.props.followThunkCreator}
       isFetching = {this.props.isFetching}
       toggleFollowing = {this.props.toggleFollowing}
       toggleFollowingProgress = {this.props.toggleFollowingProgress}
       nofollowThunkCreator = {this.props.nofollowThunkCreator}
      />
    )
 }
}



const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    toggleFollowing: state.usersPage.toggleFollowing
  }
}




export default connect(mapStateToProps, {setUsers, setCurrentPage, setTotalUsersCount, isFetchingToggle, toggleFollowingProgress, getUsersThunkCreator, followThunkCreator, nofollowThunkCreator })(UsersContainer)
