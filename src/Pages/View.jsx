import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'




function View() {
    const {id}=useParams()
    const[product,setProduct]=useState({})
    // console.log(id);
    const wishlist=useSelector(state=>state.wishlistReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
        setProduct(allProducts?.find(item=>item.id==id))
    },[])

    const handleWishlist = (product)=>{
        const existingProduct = wishlist.find(item=>item.id==product.id)
        if(existingProduct){
            alert("product already in your wishlist")
        }
        else{
            dispatch(addToWishlist(product))
            alert("product added to wishlist")
        }
    }

    console.log(wishlist);

   
  return (
   <>
    <Header></Header>
        <div style={{marginTop:"10%",marginBottom:"5%"}} className='container w-100 shadow'>
    
            <Row className='p-4'>
                <Col lg={6} md={6} sm={12}>
                   <img src={product?.thumbnail} style={{height:"500px"}} className='img-fluid' alt="" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                   <div>
                    <h2>{product?.title}</h2>
                    <p>Rs.{product?.price}</p>
                    <br />
                    <p>
                        {product?.description}
                    </p>
                    <div style={{marginTop:"40px"}}>
                        <button onClick={()=>handleWishlist(product)} className='btn btn-danger'><i className='fa-solid fa-heart text-white'></i> Wishlist</button>
                        <button onClick={()=>dispatch(addToCart(product))} className='btn btn-primary ms-5'><i className='fa-solid fa-cart-plus text-white'></i>  Add to Cart</button>
                    </div>
                   </div>
                </Col>
            </Row>
    
        </div>
      
  </>
  )
}

export default View