import React from 'react'
import NavBar  from '../components/NavBar'
import Footer from '../components/Footer';
import './index.css'

function index(props) {
    return (
        <div className='app'>
            <NavBar />
            <div className='main'>
            {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default index
