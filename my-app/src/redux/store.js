import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST  =  "ADD-POST";
const ON_UPDATE_CHANGE = "ON-UPDATE-CHANGE";
const SEND_MESSAGE = "SEND-MESSAGE";
const ON_UPDATE_CHANGE_TEXT_BODY = "ON-UPDATE-CHANGE-TEXT-BODY";


let store = {
    _state: {
    profilePage:{
      posts: [
        {id:1, message: "Hello React", likeCount:5 }
      ],
      newPostText: "I am learn React"
    },
    dialogsPage:{
    dialogs: [
      {id: 1, name: "Misha"},
      {id: 2, name: "Vladimir"},
      {id: 3, name: "lena"},
      {id: 4, name: "Roma"},
      {id: 5, name: "Inga"},
      {id: 6, name: "Ira"},
      {id: 7, name: "Anton"}
    ],
    messages: [
      {id:1, message: "Hello, it is my reacts' project"},
      {id:2, message:"Today, I writing code"},
      {id:3, message:"So. What is React? Library or framework?"},
      {id:4, message:"I think that framework"}
    ],
    newTextMessage: ''
  }
},
   getstate() {
     return this._state;
   },
   callSubscriber(){
    console.log('state changed');
   },
   subscribe (observer) {
    this.callSubscriber = observer;
  },
 dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
    this.callSubscriber(this._state);
 }
}
 

export default store;