import React from 'react';
import styles from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className = {styles.formsControls + ' ' + (hasError ?  styles.error : '')}>
      <div>
      <textarea {...input} {...props} placeholder = {'enter your post'}></textarea>
      </div>
      <div className = {styles.text}>
        {hasError ? <span>{'some error'}</span> : ''}
      </div>
    </div>
  )
}
export const Input = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className = {styles.formsControls + ' ' + (hasError ?  styles.error : '')}>
      <div>
      <input {...input} {...props} ></input>
      </div>
      <div className = {styles.text}>
        {hasError ? <span>{'some error'}</span> : ''}
      </div>
    </div>
  )
}
