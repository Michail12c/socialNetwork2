const FOLLOW = 'FOLLOW';
const NOFOLLOW = 'NOFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
  ]
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
           users: [...state.users, ...action.users]
          }
        }
       default:
         return state;
   }
} 
export const followAC = (userId) =>({type:FOLLOW, userId});
export const nofollowAC = (userId) => ({type: NOFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;