import React from 'react'
import NavBar  from '../components/NavBar'
import Footer from '../components/Footer';
import './index.css'
import mp3 from '../assets/if you.mp3'

function index(props) {
    let audio=document.getElementById('audi')
   
    return (
        <div className='app'>
            <meta name="referrer" content="never"></meta>
            <NavBar />
            <div className='main'>
            {props.children}
            </div>
            <audio id='audi' src={mp3}  onClick={()=>{
                console.log(this,'aa')
            }}></audio>
            <Footer />
        </div>
    )
}

export default index
