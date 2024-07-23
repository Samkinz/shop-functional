import { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Items from './Items/Items'
import './App.css'
import { FurnitureList } from './FurnitureList'


function App() {

  const [order, setOrder] = useState([])

    const addToOrder= (item)=> {
      setOrder([...order, item]);
    }

    const deleteOrder = (id) => {
      setOrder(order.filter((el) => el.id !== id))
    }
      



  return (
    <>
    <div className='wrapper'>
      <Header order={order} deleteOrder={deleteOrder}/>
      <Items addToOrder={addToOrder}/>
      <Footer/>
    </div>
    </>
  )
}

export default App
