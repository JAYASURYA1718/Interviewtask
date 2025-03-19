import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Contact from './ContactUs';
import Products from './Furnitures';
import About from './About';
import Login from './LoginPage';

export default function App(){
return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/Furnitures' element={<Products/>}/>
    <Route path='/ContactUs' element={<Contact/>}/>
    <Route path='/AboutUs' element={<About/>}/>
    <Route path='/Login' element={<Login/>}/>
    </Route>

  </Routes>
  </BrowserRouter>
)

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)