import { UserType } from './../type';
import { userAPI } from "../components/api/api";
import { type } from 'os';

const FOLLOW = 'FOLLOW';
const NOFOLLOW = 'NOFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'; 
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'
const CURRENT_FLAG = 'CURRENT-FLAG';
const PAGE_REVERSE = 'PAGE-REVERSE';


let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  toggleFollowing: [] as Array<number>,
  flag: 0,
};
type InitialState = typeof initialState; 

let usersReducer = (state = initialState, action: any): InitialState =>{
   switch (action.type){
     case FOLLOW:
       return{
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId){
            return {...user, followed: true}
          }
          return user;
        })
       }
       case NOFOLLOW:
       return{
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId){
            return {...user, followed: false}
          }
          return user;
        })
       }
       case SET_USERS:{
         return {
           ...state, 
           users: action.users
          }
        }
        case SET_CURRENT_PAGE:{
          return {
            ...state,
            currentPage: action.currentPage
          }
        }
        case SET_USERS_TOTAL_COUNT: {
          return {
            ...state,
            totalUsersCount:action.totalCount
          }
        }
        case TOGGLE_IS_FETCHING:{
          return {
            ...state,
            isFetching: action.isFetching
          }
        }
        case TOGGLE_FOLLOWING_PROGRESS:{
          return{
            ...state,
            toggleFollowing: action.isFetching 
            ? [...state.toggleFollowing, action.userId]
            :[state.toggleFollowing.some(id => id != action.userId )]
          }
        }
        case CURRENT_FLAG:{
          return {
            ...state,
            flag: action.currentPage
          }
        }
        case PAGE_REVERSE: {
          return {
            ...state,
            flag: action.flag - 20
          }
        }
       default:
         return state;
   }
} 
type FollowType = {
  type: typeof FOLLOW
  userId: number
}
export const follow = (userId: number): FollowType =>({type:FOLLOW, userId});

type NofollowType = {
  type: typeof NOFOLLOW
  userId: number
}
export const nofollow = (userId: number): NofollowType => ({type: NOFOLLOW, userId});

type SetUserType = {
  type:typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users});
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});
type SetUsersTotalCountType = {
  type: typeof SET_USERS_TOTAL_COUNT
  totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetUsersTotalCountType => ({type: SET_USERS_TOTAL_COUNT, totalCount});
type IsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const isFetchingToggle = (isFetching: boolean): IsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});

type ToggleFollowingProgressType = {
  type: typeof TOGGLE_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({type:TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

type CurrentPageNumberType = {
  type: typeof CURRENT_FLAG
  currentPage: number
}
export const currentPageNumber = (currentPage: number): CurrentPageNumberType => ({type:CURRENT_FLAG, currentPage})

type PageReverseType = {
  type: typeof PAGE_REVERSE
  flag: number
}
export const pageReverse = (flag: number): PageReverseType => ({type: PAGE_REVERSE, flag})

export const requestUsers = (page:number, pageSize: number) => {
  return async (dispatch: any) => {
      dispatch(isFetchingToggle(true));
      dispatch(setCurrentPage(page));

      let data = await userAPI.getUsers(page, pageSize);
      dispatch(isFetchingToggle(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
 return async (dispatch: any) => {
 dispatch (currentPageNumber(currentPage));// my function
 dispatch(setCurrentPage(currentPage));
  dispatch(isFetchingToggle(true));
   let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(isFetchingToggle(false));
 }
}
export const followThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));

   let response = await userAPI.disabled(userId)
     if(response.data.resultCode === 0){
      dispatch(nofollow(userId)) 
     }
     dispatch(toggleFollowingProgress(false, userId))
  }
}

export const nofollowThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));

    let response = await userAPI.noDisabled(userId)
     if(response.data.resultCode === 0){
      dispatch(follow(userId)) 
     }
     dispatch(toggleFollowingProgress(false, userId))
  }
}

export default usersReducer;