import { userAPI } from "../components/api/api";

const ADD_POST  =  "ADD-POST";
const ON_UPDATE_CHANGE = "ON-UPDATE-CHANGE";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  posts: [
    {id:1, message: "Hello React", likeCount:5 }
  ],
  newPostText: "I am learn React",
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id:2,
        message: state.newPostText,
        likeCount: 0
      }
    return {
      ...state,
      posts:[ ...state.posts, newPost],
      newPostText: ''
    }  
   case ON_UPDATE_CHANGE:
     return {
       ...state,
       newPostText:action.newText
     }

     case SET_USER_PROFILE:
       return{
         ...state,
         profile: action.profile
       }
    default:
      return state;
  } 
}

export const addPostActionCreator = () => {
  return {type: ADD_POST}
}
export const onUpDateActionCreator = (text) => {
  return {type: ON_UPDATE_CHANGE, newText: text} 
}
export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
}

export const userProfileThunkCreator = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId)
    .then( response => {
      dispatch(setUserProfile(response.data));
    }) 
  }
}
export default profileReducer;