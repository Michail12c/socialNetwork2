import React from 'react';
import Images from './Images';
import { sendImagesCreator } from '../../redux/images-reducer';

const ImagesContainer = (props) => {
let imageElement  = props.store.getState();

const sendImage = (url, title) =>{
  props.store.dispatch(sendImagesCreator(url, title) )
}
  
  return (
     <Images image = {imageElement.imagesPage.images} sendImageContainer = {sendImage} />
  )
}

export default ImagesContainer;