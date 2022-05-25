import React from 'react';
import './App.css';
import { CardBody } from './components/Cardbody';
import { LayoutSideNav } from './components/Layoutsidenav';
import { NavBar } from './components/Navbar';
import {Footer} from './components/Footer';
import {Form} from './Components/Form';
import Search from './Components/Search';

function App() {
  return(
    <div className="sb-nav-fixed">
        <Search/>
        <NavBar />
        <Form/>
        <LayoutSideNav />
        <CardBody />
        <Footer />
    </div>
  )
}

export default App;