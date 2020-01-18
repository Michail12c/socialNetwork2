import { userAPI, profileAPI } from "../components/api/api";

const ADD_POST  =  "ADD-POST";
const ON_UPDATE_CHANGE = "ON-UPDATE-CHANGE";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";


let initialState = {
  posts: [
    {id:1, message: "Hello React", likeCount:5 }
  ],
  newPostText: "I am learn React",
  profile: null,
  status: ''
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
       case SET_PROFILE_STATUS:
        return{
          ...state,
          status: action.status
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
export const setProfileStatus= (status) => {
  return {type: SET_PROFILE_STATUS, status}
}

export const userProfileThunkCreator = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId)
    .then( response => {
      dispatch(setUserProfile(response.data));
    }) 
  }
}
export const setUserProfileThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatus(userId)
    .then( response => {
      dispatch(setProfileStatus(response.data));
    }) 
  }
}
export const updateProfileThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateProfileStatus(status)
    .then( response => {
      if(response.data.resultCode === 0){
        dispatch(setProfileStatus(status));
      }
    }) 
  }
}
export const updateProfilePhotoThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateProfileStatus(status)
    .then( response => {
      if(response.data.resultCode === 0){
        dispatch(setProfileStatus(status));
      }
    }) 
  }
}



export default profileReducer;