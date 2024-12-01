import { useState } from 'react';
import {  Productsdata } from './components/productsdata';
import Index from './components/homepage';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { myContext } from './components/context';
import './App.css';
import Cart from './components/cart';
import { Wishlist } from './components/wishlist';
import { Register } from './components/register';
import Login from './components/login';
import Category from './components/category';
import { Buynow } from './components/buynow';
import { AdminDashboard } from './components/admin/admin';
import { View } from './components/admin/customerview';
import { Bannedcust } from './components/admin/bannedcust';
import Adminproduct from './components/admin/adminproductview';
import { Add } from './components/admin/adminaddpro';
import { Adminlogin } from './components/admin/adminlogin';
import { Payment } from './components/payment';

// import logo from './logo.svg';

function App() {
const[products,Setproducts]=useState(Productsdata)
const[like,Setlike]=useState([])
const[cart,Setcart]=useState([])
const[user,Setuser]=useState([])
const[loginuser,SetLoginuser]=useState([])
const[buynow,SetBuynow]=useState()
const[logsuccess,Setlogsuccess]=useState(false)
const[quantity,Setquantity]=useState(1)
const[adminlogin,Setadminlogin]=useState([])




const values={
  products,Setproducts,
  like,Setlike,
  cart,Setcart,
  user,Setuser,
  loginuser,SetLoginuser,
  buynow,SetBuynow,
  quantity,Setquantity,
  logsuccess,Setlogsuccess,
  adminlogin,Setadminlogin
}


  return (
    <div className='app'>
    <myContext.Provider value={values} >
    <BrowserRouter>
    <Routes>
      <Route path='/index' element={<Index/>}> </Route>
      {/* <Route path='/products' element={<Productsdata/>}> </Route> */}
      <Route path='/cart' element={<Cart/>}> </Route>
      <Route path='/wishlist' element={<Wishlist/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/register' element={<Register/>}> </Route>
      <Route path='/homepage/:category' element={<Category/>}> </Route>
      <Route path='/buynow/' element={<Buynow/>}> </Route>
      <Route path='/payment/' element={<Payment/>}> </Route>

      <Route path='/admin/' element={<AdminDashboard/>}> </Route>
      <Route path='/view/' element={<View/>}> </Route>
      <Route path='/banned/' element={<Bannedcust/>}> </Route>
      <Route path='/adminproview/' element={<Adminproduct/>}> </Route>
      <Route path='/add/' element={<Add/>}> </Route>
      
      {/* <Route path='/adminlogin' element={<Adminlogin/>}> </Route> */}



      








      
      
      
      
      
     
    </Routes>
    </BrowserRouter>
    </myContext.Provider> 
      
    </div>
  );
}

export default App;
