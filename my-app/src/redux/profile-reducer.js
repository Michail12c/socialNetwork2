import { userAPI, profileAPI } from "../components/api/api";

const ADD_POST  =  "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";


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
        message: action.newPostText,
        likeCount: 0
      }
    return {
      ...state,
      posts:[ ...state.posts, newPost],
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
        case SAVE_PHOTO_SUCCESS:
        return{
          ...state,
          profile:{...state.profile, photos: action.photos}
        }
    default:
      return state;
  } 
}

export const addPostActionCreator = (newPostText) => {
  return {type: ADD_POST, newPostText}
}
export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
}
export const setProfileStatus= (status) => {
  return {type: SET_PROFILE_STATUS, status}
}
export const savePhotoSuccess = (photos) => {
  return {type: SAVE_PHOTO_SUCCESS, photos}
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
export const savePhoto = (file) => async (dispatch) => {
 let response = await profileAPI.savePhoto(file);
      if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
    }
    export const saveProfile = (profile) => async (dispatch) => {
      let response = await profileAPI.saveProfile(profile);
          /*  if(response.data.resultCode === 0){
             dispatch(savePhotoSuccess(response.data.data.photos));
           } */
         }


export default profileReducer;