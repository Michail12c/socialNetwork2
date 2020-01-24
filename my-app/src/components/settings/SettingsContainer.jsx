import React from 'react';
import Settings from './Settings';
import { connect } from 'react-redux';
import { saveProfile, savePhoto } from '../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    
  }
}

const SettingsContainer = connect (mapStateToProps, {saveProfile, savePhoto})(Settings)
export default SettingsContainer;