import { ProfileType } from './../../type';
import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers:{
    'API-KEY': '6afcedda-8491-4257-96dc-f8dee8dc5f18'
  }
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },
  disabled(userId: number){
      return  instance.delete(`follow/${userId}`)
  },
  noDisabled(userId: number){
    return  instance.post(`follow/${userId}`)
  },
  getProfile(userId: number){
    console.warn('please, use profileAPI');
    return profileAPI.getProfile(userId);
  }
}

export const profileAPI = {
  getProfile(userId: number){
    return instance.get(`profile/` + userId)
  },
  getProfileStatus (userId: number){
    return instance.get(`profile/status/` + userId)
  },
  updateProfileStatus (status: string){
     return instance.put(`profile/status/`, {
       status: status
     })
  },
  savePhoto(photoFile: any){
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo/', formData, {
      headers:{
      'Content-Type' : 'multipart/ form-data'
      }
    })
  },
  saveProfile(profile: ProfileType){
    return instance.put(`profile`, profile)
  }
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}

type MeResponseType  = {
  data: {id: number, email: string, login: string}
  resultCode: ResultCodesEnum
  messages: Array<number>

}

type LoginMeResponseType  = {
  data: {userId: number}
  resultCode: ResultCodesEnum
  messages: Array<number>

}
export const authAPI = {
  me (){
    return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null){
    return instance.post<LoginMeResponseType>('auth/login', {email, password, rememberMe, captcha}).then(res => res.data)
  },
  logout(){
    return instance.delete('auth/login')
  }
}
export const securityAPI = {
  getCaptchaURL(){
    return instance.get('security/get-captcha-url')
  }
}