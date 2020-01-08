let rerenderAllThree = () => {
  console.log('state changed');
}

const state = {
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
    ]
  }
}

export let addPost = () =>{
    let newPost = {
      id:2,
      message:state.profilePage.newPostText,
      likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = " ";
    rerenderAllThree(state);
}
export let onUpdateChange = (newText) =>{
   state.profilePage.newPostText = newText;
   rerenderAllThree(state);
} 

export const subscribe = (observer) => {
   rerenderAllThree = observer;
} 
export default state;