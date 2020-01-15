const FOLLOW = 'FOLLOW';
const NOFOLLOW = 'NOFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'; 

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1
};

let usersReducer = (state = initialState, action) =>{
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
       default:
         return state;
   }
} 
export const followAC = (userId) =>({type:FOLLOW, userId});
export const nofollowAC = (userId) => ({type: NOFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});

export default usersReducer;