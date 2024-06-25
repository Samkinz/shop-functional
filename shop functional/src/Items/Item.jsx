import {UseState} from 'react'
import React from 'react'
import './items.css'
import '../FurnitureList'
import { FurnitureList } from '../FurnitureList'

export default function Item(props) {



  return(

    <div className='item'>
      <img src={'../../public/' + props.item.img} alt="furniture item picture" />
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{props.item.price}$</b>
      <div className='add-to-card'>+</div>
    </div> 
  )
}