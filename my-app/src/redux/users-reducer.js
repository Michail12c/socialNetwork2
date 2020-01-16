const FOLLOW = 'FOLLOW';
const NOFOLLOW = 'NOFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'; 
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'


let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  toggleFollowing: []
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
       default:
         return state;
   }
} 
export const follow = (userId) =>({type:FOLLOW, userId});
export const nofollow = (userId) => ({type: NOFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const isFetchingToggle = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type:TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export default usersReducer;