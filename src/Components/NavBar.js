import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'
import MobileNumber from './MobileNumber'
import Services from './Services'

 class NavBar extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">AboutUs</Link></li>
      <li><Link to="/contact">ContactUs</Link></li>
      <li><Link to="/number">MobileNumber</Link></li>
      </ul>
      <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/services"   element={<Services />}/>
      <Route path="/about"  element={<AboutUs />}/>
      <Route path="/contact"  element={<ContactUs />}/>
      <Route path="/number"   element={<MobileNumber />}/>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

export default NavBar