import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productsSlice from '../Redux/Slices/productsSlice'
import { Link, useNavigate } from 'react-router-dom'
import { decrementQuantity, emptyCart, incrementQuantity, removeFromCart } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'

function Cart() {

  const cart = useSelector(state=>state.cartReducer)
  const [totalCartAmount,setTotalCartAmount]=useState(0)
 
  useEffect(()=>{
  if(cart?.length>0){
    setTotalCartAmount(cart?.map(item=>item?.totalPrice).reduce((p1,p2)=>p1+p2))
  }else{
  setTotalCartAmount(0)
  }
  },[cart])

  const navigate =useNavigate(
  )

  const dispatch =useDispatch()

  const handleCheckOut=()=>{
    alert("order placed successfully...Thank you for shopping with us !!")
    dispatch(emptyCart())
    navigate('/')

  }

  const handleDecrement=(product)=>{ 
      if(product.quantity==1){
        dispatch(removeFromCart(product?.id))

      }
      else{
        dispatch(decrementQuantity(product))
      }
    }

  

  return (

    <>
    <Header></Header>
      <div style={{marginTop:'100px',marginBottom:'80px'}}>
        {
          cart?.length>0?
          <div className='container'>
              <h1>Cart Summary</h1>
              <div className='row'>
              <div className='col-lg-8'>
                  <table className='table shadow'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cart.map((product,index)=>(
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td>{product.title}</td>
                            <td><img width={'60px'} height={'60px'} src={product?.thumbnail} alt="no image" /></td>
                            <td>
                              <div className='d-flex'>
                                <span onClick={()=>handleDecrement(product)} style={{cursor:'pointer'}} className='fw-bolder me-3'>-</span>
                                <p className='fw-bolder text-center'>{product?.quantity}</p>
                                <span onClick={()=>dispatch(incrementQuantity(product))} style={{cursor:'pointer'}} className='fw-bolder ms-3'>+</span>
                                </div>
                            </td>
                            <td>
                              ${product.totalPrice}
                            </td>
                            <td>
                              <button onClick={()=>dispatch(removeFromCart(product?.id))} className='btn btn-link'><i className='fa-solid fa-trash text-danger'></i></button>
                            </td>
                          </tr>
                        )
                        )
                      }
                    </tbody>
                  </table>
                  <div className="float-end mt-3">
                    <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>Empty Cart</button>
                    <Link to={'/'} className='btn btn-success ms-3'>Shop More</Link>
                  </div>
              </div>
              <div className='col-lg-4'>
                  <div className='shadow border rounded p-4'>
                      <h5>Total Products: <span className='fw-bolder text-danger'>{cart?.length}</span></h5>
                      <h4>Total Amount: <span className='fw-bolder text-danger'>{totalCartAmount}</span></h4>
                      <hr />
                      <div className='d-grid'>
                        <button onClick={handleCheckOut} className='btn btn-success'>Checkout</button>
                      </div>
                  </div>   
              </div>
              </div>
          </div>:
        <div>
          <h2>your cart is empty...</h2>
        </div>
          
        }
  
      </div>
    
      
    </>
  )
}
  



export default Cart