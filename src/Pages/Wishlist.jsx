import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardBody, Col, Row } from 'react-bootstrap';
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../Components/Header';


function Wishlist() {
  //get wishlist from store
  const wishlist =useSelector(state=>state.wishlistReducer)
  console.log(wishlist);

  const handleRemoveWishlist =(product)=>{
    dispatch(removeFromWishlist(product?.id))
    dispatch(addToCart(product))
  }

  const dispatch=useDispatch()
  return (
    <>
    <Header></Header>
      <div style={{marginTop:"120px"}}  >
        <div className='conatiner ms-5' >
          <Row>
            {
              wishlist.length>0?
                wishlist.map((item,index)=>(
                  <Col key={index} style={{marginBottom:'10px'}} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail} />
           <Card.Body>
            <Card.Title>{item.title.slice(0,20)}...</Card.Title>
            <div className="d-flex justify-content-between ">
              <button onClick={()=>dispatch(removeFromWishlist(item?.id))} className='btn btn-link'><i className='fa-solid fa-heart-circle-minus fa-lg text-danger'></i></button>
              <button onClick={()=>handleRemoveWishlist(item)} className='btn btn-link'><i className='fa-solid fa-cart-plus fa-lg text-success'></i></button>
  
            </div>
        
            
            </Card.Body>
        </Card>
            </Col>
                )):
                <div>
                  <h1>Wishlist is empty</h1>
                </div>
            }
          </Row>
        </div>
      </div>
    
   </>
  )
}

export default Wishlist