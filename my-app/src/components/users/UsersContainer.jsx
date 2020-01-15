import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, nofollow, setUsers, setCurrentPage, setTotalUsersCount, isFetchingToggle} from '../../redux/users-reducer';
import * as axios from 'axios';


class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.isFetchingToggle(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
      this.props.isFetchingToggle(false);
    }) 
  }
  onChangePage = (pageNumber) => {
    this.props.isFetchingToggle(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then( response => {
      this.props.setUsers(response.data.items);
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
    isFetching: state.usersPage.isFetching
  }
}




export default connect(mapStateToProps, {follow, nofollow, setUsers, setCurrentPage, setTotalUsersCount, isFetchingToggle })(UsersContainer)
