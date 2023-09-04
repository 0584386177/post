import React from 'react'
import Styles from './post-main.module.css'
const postMainItem = (props) => {
  return (
    <div className={`${Styles.postMain_item}`}>
      <img className={`${Styles.postMain_item_image}`} src ={`${props.imageSrc}`}></img>
      <div className={`${Styles.postMain_item_content}`}>
      <h4 className=  {`${Styles.postMain_item_title}`}>{props.title}</h4>
      <p className=  {`${Styles.postMain_item_desc}`}>{props.description}</p>
      <button className= {`${Styles.postMain_item_more}`}>{props.more}</button>
      </div>
    </div>
  )
}

export default postMainItem;
