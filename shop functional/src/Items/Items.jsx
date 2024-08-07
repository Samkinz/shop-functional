import React from 'react'
import { FurnitureList } from '../FurnitureList'
import Item from './Item'
import './items.css'

export default function Items({addToOrder}) {
  return (
    <main>{FurnitureList.map(el => (
      <Item key={el.id} item={el} addToOrder={addToOrder} />
    ))}</main>
  )
}
