import { DialogsType, MessagesType } from './../type';
const SEND_MESSAGE = "SEND-MESSAGE";


let initialState = {
  dialogs: [
    {id: 1, name: "Misha"},
    {id: 2, name: "Vladimir"},
    {id: 3, name: "lena"},
    {id: 4, name: "Roma"},
    {id: 5, name: "Inga"},
    {id: 6, name: "Ira"},
    {id: 7, name: "Anton"}
  ] as Array<DialogsType>,
  messages: [
    {id:1, message: "Hello, it is my reacts' project"},
    {id:2, message:"Today, I writing code"},
    {id:3, message:"So. What is React? Library or framework?"},
    {id:4, message:"I think that framework"}
  ] as Array<MessagesType>,
  newTextMessage: ''
}
type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type){
   case SEND_MESSAGE:
    let body = action.newMessageText;
    return {
      ...state,
      newTextMessage: '',
      messages: [...state.messages, {id:5, message: body}]
    }

  default:
    return state;
  }
}
type SendMessageCreatorType = {
  type : typeof SEND_MESSAGE
  newMessageText: string
}

export const sendMessageCreator = (newMessageText: string): SendMessageCreatorType => {
  return {type: SEND_MESSAGE, newMessageText}
}

export default dialogsReducer;