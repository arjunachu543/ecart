
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
// import Header from './Components/Header'
import Home from './Pages/Home'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'



function App() {
  

  return (
    <>
     {/* <Header></Header> */}
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/view/:id' element={<View></View>}></Route>
      <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
     </Routes>
     <Footer></Footer>
    </>
  )
}

export default App
