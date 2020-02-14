import { PostsType, ProfileType, PhotosType } from './../type';
import { userAPI, profileAPI } from "../components/api/api";

const ADD_POST  =  "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";


let initialState = {
  posts: [
    {id:1, message: "Hello React", likeCount:5 }
  ] as Array<PostsType>,
  newPostText: "I am learn React",
  profile: null as ProfileType |null,
  status: ''
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
          profile:{...state.profile, photos: action.photos} as ProfileType
        }
    default:
      return state;
  } 
}

type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newPostText: string
} 
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => {
  return {type: ADD_POST, newPostText}
}
type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
  return {type: SET_USER_PROFILE, profile}
}
type SetProfileStatusType = {
  type: typeof SET_PROFILE_STATUS
  status: string
}
export const setProfileStatus= (status: string): SetProfileStatusType => {
  return {type: SET_PROFILE_STATUS, status}
}
type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => {
  return {type: SAVE_PHOTO_SUCCESS, photos}
}

export const userProfileThunkCreator = (userId: number) => async (dispatch: any) => {
   const response = await userAPI.getProfile(userId)
      dispatch(setUserProfile(response.data));
}

export const setUserProfileThunk = (userId: number) => async (dispatch: any) => {
  const response = await  profileAPI.getProfileStatus(userId)
      dispatch(setProfileStatus(response.data));
}

export const updateProfileThunk = (status: string) => async (dispatch: any) => {
   const response = await profileAPI.updateProfileStatus(status)
      if(response.data.resultCode === 0){
        dispatch(setProfileStatus(status));
      }
}
export const updateProfilePhotoThunk = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateProfileStatus(status)
      if(response.data.resultCode === 0){
        dispatch(setProfileStatus(status));
      }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
 let response = await profileAPI.savePhoto(file);
      if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
    }
    export const saveProfile = (profile: ProfileType) => async (dispatch: any) => {
      let response = await profileAPI.saveProfile(profile);
          /*  if(response.data.resultCode === 0){
             dispatch(savePhotoSuccess(response.data.data.photos));
           } */
         }


export default profileReducer;