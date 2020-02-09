import React from 'react';
import styles from './Settings.module.css';
import { Field, reduxForm } from 'redux-form';

const EditProfile = (props) => {
  const onSubmit = (formData) => {
    props.saveProfile(formData)
  }

  return(
    <div className = {styles.profileMode}>
      <h4>Edit profile</h4>
     <ProfileReduxForm onSubmit = {onSubmit}/>
      <div>
        <button onClick = {props.deactivateMode}>Save changes</button>  
      </div> 
    </div>
  )
}
const ProfileForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <div>
       <Field component = {'input'} name = {'aboutMe'} /> : aboutMe
      </div>
      <div>
      <Field component = {'input'} name = {'lookingForAJobDescription'} /> : lookingForAJobDescription
      </div>
      <div>
      <Field component = {'input'} name = {'fullName'} /> : fullName
      </div>
      <div>
        <button >change profile</button>
      </div>
    </form>
  )
}

let ProfileReduxForm = reduxForm({
  form: "settings"
})(ProfileForm)

export default EditProfile;