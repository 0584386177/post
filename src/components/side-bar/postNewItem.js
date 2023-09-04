import React from 'react'
import Styles from './side-bar.module.css'
const postNewItem = (props) => {
  return(
    <div className= {`${Styles.postNew_item}`}>
      <img src= {`${props.imageSrc}`} className={`${Styles.postNew_item_image}`} ></img>
      <div className={`${Styles.postNew_item_content}`}>
      <h6 className={`${Styles.postNew_item_title}`}>{props.title}</h6>
      <p className={`${Styles.postNew_item_description}`}>{props.description}</p>
      </div>
    </div>
  )
}

export default postNewItem
