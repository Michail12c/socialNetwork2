import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, nofollow, setUsers, setCurrentPage, setTotalUsersCount, isFetchingToggle, toggleFollowingProgress} from '../../redux/users-reducer';
import * as axios from 'axios';
import { userAPI } from '../api/api';


class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.isFetchingToggle(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize)
    .then( data => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.isFetchingToggle(false);
    }) 
  }
  onChangePage = (pageNumber) => {
    this.props.isFetchingToggle(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize)
    .then( data => {
      this.props.setUsers(data.items);
      this.props.isFetchingToggle(false);
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
       isFetching = {this.props.isFetching}
       toggleFollowing = {this.props.toggleFollowing}
       toggleFollowingProgress = {this.props.toggleFollowingProgress}
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




export default connect(mapStateToProps, {follow, nofollow, setUsers, setCurrentPage, setTotalUsersCount, isFetchingToggle, toggleFollowingProgress })(UsersContainer)
