const ADD_IMAGES = 'ADD-IMAGES';


type ImagesType = {
  id: number
  url: string
  title: string
}
let initialState = {
  images:[
    {id: 1, url: 'https://i.pinimg.com/originals/07/2f/c4/072fc4bdd4c663d21b7163f873276796.jpg', title: 'sakura'},
    {id:2, url:'http://dekormyhome.ru/wp-content/uploads/2019/02/11-15-1024x640.jpg' , title: 'Japanese image'}
  ] as Array<ImagesType>,
}
type InitialStateType = typeof initialState 

const imagesReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type){
    case ADD_IMAGES:
    let newImage = {
      id:3,
      url: action.newUrl,
      title:action.newTitle
    }
    return {
      ...state,
      images:[...state.images, newImage]
    }
    default:
      return state;
  }
}
type SendImagesCreatorType = {
  type: typeof ADD_IMAGES
  title: string
}
export const sendImagesCreator = (url: string, title: string) => {
  return {type: ADD_IMAGES, newUrl: url, newTitle: title}
}


export default imagesReducer;