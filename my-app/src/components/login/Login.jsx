import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit} >
       <div>
         <Field component = {'input'} name = {'login'} placeholder = {'Login'}/>
       </div>
       <div>
         <Field component = {'input'} name = {'password'} placeholder = {'Password'}/>
       </div>
       <div>
         <Field component = {'input'} name = {'rememberMe'} type= {'checkbox'} /> Remember me
       </div>
       <div>
         <button>Login</button>
       </div>
    </form>
  )
}

let LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
     console.log(formData)
  }
  return (
    <div className = {styles.login}>
      <h2>
        Login
      </h2>
      <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
  )
}

export default Login;