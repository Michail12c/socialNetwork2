import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators';
import { Textarea } from '../../utils/FormsControls';


let maxLength20 = maxLengthCreator(20); 

const MyPosts = (props) => {
   let state = props.state;
   let postsElement = state.map(post => <Post message={post.message} likeCount={post.likeCount} />)


   const addPost = (values) => {
      props.addPostContainer(values.newPostText);
   }

   return (
      <div className={styles.myPosts}>
         {postsElement}
         <div className={styles.form}>
            <PostReduxForm onSubmit = {addPost}  />
         </div>
      </div>
   )
}
let addPostForm = (props) => {
   return (
      <form onSubmit = {props.handleSubmit}>
         <Field component = {Textarea}
          name = {'newPostText'}
          validate = {[required, maxLength20]}/>
         <div>
            <button>add Post</button>
         </div>
      </form>
   )
}
let PostReduxForm = reduxForm({
   form: 'postsForm'
 })( addPostForm)


export default MyPosts;