import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Contact from './ContactUs';
import Products from './Products';
import About from './About';
import Login from './LoginPage';

export default function App(){
return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
)

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)