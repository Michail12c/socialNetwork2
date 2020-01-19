import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../utils/validators';
import { Input } from '../utils/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

let maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit} >
       <div>
         <Field component = {Input} name = {'email'} 
         placeholder = {'email'} validate = {[required, maxLength50]}/>
       </div>
       <div>
         <Field component = {Input} name = {'password'} type = {'password'}
         placeholder = {'Password'}  validate = {[required, maxLength50]} />
       </div>
       <div>
         <Field component = {Input} validate = {[required]}  name = {'rememberMe'} type= {'checkbox'} /> Remember me
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
     props.login(formData.email, formData.password, formData.rememberMe)
  }
  if(props.isAuth) return <Redirect to = {'/profile'}/>
  return (
    <div className = {styles.login}>
      <h2>
        Login
      </h2>
      <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth:state.auth.isAuth
  }
}

export default connect( mapStateToProps , {login})(Login);