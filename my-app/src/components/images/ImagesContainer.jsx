import React from 'react';
import Images from './Images';
import { sendImagesCreator } from '../../redux/images-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return {
    image:state.imagesPage.images
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendImageContainer: (url, title) => {
      dispatch(sendImagesCreator(url, title)) 
    }
  }
}

const ImagesContainer = connect(mapStateToProps, mapDispatchToProps)(Images);

export default ImagesContainer;