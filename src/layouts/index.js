import React from 'react'
import NavBar  from '../components/NavBar'
import Footer from '../components/Footer';
import router from 'umi/router'
import './index.css'

function index(props) {
    return (
        <div className='app'>
            <meta name="referrer" content="never"></meta>
            <NavBar />
            <div className='main'>
            {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default index
