import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/Slices/productsSlice'
import { Spinner,Row,Col,Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'




function Home() {

    const dispatch=useDispatch()
    const {allProducts,loading,error}=useSelector(state=>state.productReducer)

    useEffect(()=>{
      dispatch(fetchProducts())  
    },[])


  return (
    <>
    <Header insideHome></Header>
      <div style={{marginTop:"8%"}}>
          {
              loading?<div className='mt-5 text-center'>
                 <Spinner animation="border" variant="success" /> Loading...
              </div>
              :
              <Row className='m-5'>
                 {allProducts.length>0&&
                              allProducts.map((products,index)=>(
                          <Col key={index} sm={12} md={6} lg={4} xl={3} className='mb-3'>
                          <Card className='shadow' style={{ width: '18rem' }}>
                          <Card.Img style={{border:'1px solid white'}} height={'200px'} variant="top" src={products.thumbnail} />
                          <Card.Body>
                              <Card.Title>{products.title.slice(0,18)}...</Card.Title>
                              <Link to={`view/${products.id}`} className='btn btn-link'>View More</Link>
                          </Card.Body>
                          </Card>
                      </Col>))
                  }
              </Row>
  
          }
      </div>
    </>
  )
}

export default Home