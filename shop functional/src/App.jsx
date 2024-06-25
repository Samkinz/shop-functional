import { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Items from './Items/Items'
import './App.css'
import { FurnitureList } from './FurnitureList'

function App() {

  const [order, setOrder] = useState(0)
  const shoppingCart = FurnitureList[order]
    console.log(shoppingCart)

  return (
    <>
    <div className='wrapper'>
      <Header/>
      <Items  />
      <Footer/>
    </div>
    </>
  )
}

export default App
