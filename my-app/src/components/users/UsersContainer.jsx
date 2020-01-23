import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {  setUsers, setCurrentPage, setTotalUsersCount, isFetchingToggle, toggleFollowingProgress, getUsersThunkCreator, followThunkCreator, nofollowThunkCreator,  pageReverse } from '../../redux/users-reducer';
import { getUsers } from '../../redux/users-selectors';



class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
/*    const {currentPage, pageSize} = this.props; */
  /*  this.props.getUsers(currentPage, pageSize); */
  }
  onChangePage = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.getUsersThunkCreator(pageNumber, pageSize);
/*    this.props.getUsers(pageNumber, pageSize); */
  }

  render () {

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
       flag = {this.props.flag}
       pageReverse = {this.props.pageReverse}
      />
    )
 }
}



const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    toggleFollowing: state.usersPage.toggleFollowing,
    flag: state.usersPage.flag,

  }
}




export default connect(mapStateToProps, {setUsers, setCurrentPage, setTotalUsersCount, isFetchingToggle, toggleFollowingProgress, getUsersThunkCreator, followThunkCreator, nofollowThunkCreator, pageReverse })(UsersContainer)
