import React from 'react';
import preloader from '../icon/ajax-loader.gif';

const Preloader = () => {
   return (
     <div>
       <img src={preloader} alt="" width = "40" height = "40"/>
     </div>
   )
}
export default Preloader;