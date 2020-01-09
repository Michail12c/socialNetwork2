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
   if(action.type === ADD_POST){
    let newPost = {
      id:2,
      message:this._state.profilePage.newPostText,
      likeCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = " ";
    this.callSubscriber(this._state);
   }
   else if(action.type === ON_UPDATE_CHANGE){
    this._state.profilePage.newPostText = action.newText;
    this.callSubscriber(this._state);
   }
   else if(action.type === SEND_MESSAGE){
     let body = this._state.dialogsPage.newTextMessage;
     this._state.dialogsPage.newTextMessage = ' ';
     this._state.dialogsPage.messages.push({id:5, message: body});
     this.callSubscriber(this._state);
   }
   else if(action.type === ON_UPDATE_CHANGE_TEXT_BODY){
     this._state.dialogsPage.newTextMessage = action.body;
     this.callSubscriber(this._state);
   }
 }
}
 

export const addPostActionCreator = () => {
  return {type: ADD_POST}
}
export const onUpDateActionCreator = (text) => {
  return {type: ON_UPDATE_CHANGE, newText: text} 
}
export const sendMessageCreator = () => {
  return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyCreator = (body) => {
  return {type:ON_UPDATE_CHANGE_TEXT_BODY, body: body }
}

export default store;