import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchByProduct } from '../Redux/Slices/productsSlice';

function Header({insideHome}) {
    const wishlist=useSelector(state=>state.wishlistReducer)
    const cart=useSelector(state=>state.cartReducer)
    const dispatch =useDispatch()
    // const[wishlistCount,setWishlistCount]=useState(0)
    // useEffect(()=>{
    //     setWishlistCount(wishlist?.length)

    // },[wishlist])
  return (
    <div>
        <Navbar style={{position:"fixed",width:"100%",top:"0",zIndex:"2"}} expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand ><Link style={{textDecoration:'none', color:"white"}} to={"/"}><i class="fa-solid fa-truck-fast"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          {insideHome&&<Nav.Link ><input onChange={(e)=>dispatch(searchByProduct(e.target.value.toLowerCase()))} type="text" style={{width:'500px',marginRight:'100px'}} placeholder='Search products here' className='' /></Nav.Link>}

            <Nav.Link ><Link style={{textDecoration:'none', color:"white"}} to={"/"}>Home</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:'none', color:"white"}} to={"/wishlist"}>Wishlist ({wishlist?.length})</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:'none', color:"white"}}  to={"/cart"}>Cart ({cart?.length})</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header