import React from 'react';
import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {addToCart} from "./redux/cartSlice"


const App = ()=> {
  const [cartOpen, setCartOpen] = useState(false)
  const [popUp, setPopUp] = useState(false)
  console.log("cart opening", cartOpen)
  const dispatch = useDispatch()
  const myCartItems = useSelector((state)=>state.cart)
  console.log("my cart items are",myCartItems)
  const initialProducts=[
    {
        id:1,
        name:"Key board",
        price:"3000"
    },
    {
      id:2,
      name:"Computer",
      price:"200000"
  },
  {
    id:3,
    name:"Television",
    price:"30000"
},
{
  id:4,
  name:"KTM Duke",
  price:"300000"
}]

const handleCart = (id)=>{
  setPopUp(true)
  setTimeout(()=>{
    setPopUp(false)
  },2000)
  const cartItem = initialProducts.find((item)=>item.id===id)
  dispatch(addToCart(cartItem))
  
  // console.log("my cart items are",cartItem)
  // console.log(id)

}

const handleMyCart = ()=>{
  setCartOpen(true)

}

const handleExplore = ()=>{
  setCartOpen(false)

}

const handleOk=()=>{
  setPopUp(false)

}



  return(
  <div>
    <h1 className = "font-extrabold text-center my-3 text-3xl">Amazon Products</h1>
    {/* <button className = "bg-blue-500 p-2 my-3 rounded-lg text-center mx-5" onClick = {handleMyCart}>My cart</button> */}

{popUp&&
 <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg animate-fade-in-out">
 <div className="alert-content">
   <h4 className="font-medium">Item Added to Cart</h4>
   <p className="font-medium">The item has been successfully added to your cart.</p>
   <button className="border rounded bg-yellow-300 text-white p-2" onClick = {handleOk}>OK</button>
 </div>
 </div>

}

{cartOpen ? 
  <div>
    <ul>
    <h1 className = "text-lg mx-3 my-3 font-bold text-left">My cart products</h1>
    <button onClick = {handleExplore} className = "border rounded p-2 text-white bg-green-500 mx-3">Explore</button>
    {myCartItems.map((myitem) => (
      // <h1>{myitem?.name||'no name'}</h1>
      // console.log("single item",myitem.name)
      <div classNam ="flex">
        
      <div className = "bg-blue-400 p-3 my-3 mx-2 text-center shadow-lg rounded-lg w-1/2">
     
      <h1>Name :{myitem.name}</h1>
      <p>Price:{myitem.price}</p>
      </div>
      </div>
      
      //  <li key = {myitem.id}>{myitem.name}</li>
      // <div className = "text-center border rounded-lg bg-slate-500 p-3 my-3 shadow-lg mx-5 w-1/2">
      // <h1>Name : {myitem.name}</h1>
     
      // <p>Price:{myitem.price}</p>
      // {/* <button className = "border rounded-lg p-2 my-2 hover:bg-slate-700" onClick={()=>handleCart(myitem.id)}>Add to cart</button> */}
      // </div>
    ))}
    </ul>
    </div>


:

<div>
    <ul>
    <button className = "bg-blue-500 p-2 my-3 rounded-lg text-center mx-5" onClick = {handleMyCart}>My cart</button>
    {initialProducts.map((item) => (
      // <li key = {item.id}>{item.name}</li>
      <div className ="flex justify-center">
      <div className = "text-center border rounded-lg bg-red-500 p-3 my-3 shadow-lg mx-5 w-1/2">
      <h1>Name : {item.name}</h1>
      <p>Price:{item.price}</p>
      <button className = "border rounded-lg p-2 my-2 hover:bg-slate-700" onClick={()=>handleCart(item.id)}>Add to cart</button>
      </div>
      </div>
    ))}
    </ul>
    </div>
}





  </div>
  )
}

export default App;