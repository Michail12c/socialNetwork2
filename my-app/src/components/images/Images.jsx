import React from 'react';
import styles from './Images.module.css';
import Image from './image/image';

const Images = (props) => {

  console.log(props)

  let imagesElement = props.image.map(image => <Image url={image.url} title={image.title} />)

  const newImageElem = React.createRef();
  const newTitleElem = React.createRef();  

  const addImage = () => {
  let url = newImageElem.current.value;
  let title = newTitleElem.current.value;
    props.sendImageContainer(url, title);
  }

  return (
    <div className={styles.images}>
      <p>Your images</p>
      <div>
        <div>
          <textarea ref = {newImageElem} placeholder = 'enter a link to the picture'>
          </textarea>
        </div>
        <div>
        <textarea ref = {newTitleElem} placeholder = 'enter title yours picture'>
          </textarea>
        </div>
        <div>
          <button onClick = {addImage}>add image</button>
        </div>
      </div>
      <div>
        {imagesElement}
      </div>
    </div>
  )
}

export default Images;