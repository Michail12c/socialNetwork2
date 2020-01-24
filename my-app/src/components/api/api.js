import * as axios from 'axios';

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
  disabled(userId){
      return  instance.delete(`follow/${userId}`)
  },
  noDisabled(userId){
    return  instance.post(`follow/${userId}`)
  },
  getProfile(userId){
    console.warn('please, use profileAPI');
    return profileAPI.getProfile(userId);
  }
}
export const profileAPI = {
  getProfile(userId){
    return instance.get(`profile/` + userId)
  },
  getProfileStatus (userId){
    return instance.get(`profile/status/` + userId)
  },
  updateProfileStatus (status){
     return instance.put(`profile/status/`, {
       status: status
     })
  },
  savePhoto(photoFile){
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo/', formData, {
      headers:{
      'Content-Type' : 'multipart/ form-data'
      }
    })
  }
}
export const authAPI = {
  me (){
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false, captcha = null){
    return instance.post('auth/login', {email, password, rememberMe, captcha})
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