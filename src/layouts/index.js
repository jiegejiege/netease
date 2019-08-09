import React from 'react'
import NavBar  from '../components/NavBar'
import Footer from '../components/Footer';
import './index.css'
import {connect} from 'dva'
function index(props) {
    let audio=document.getElementById('audi')
   const {audioResource}=props;
   //console.log(props)
    return (
        <div className='app'>
            <meta name="referrer" content="never"></meta>
            <NavBar />
            <div className='main'>
            {props.children}
            </div>
            <audio id='audi' src={audioResource[audioResource.length-1]}  onClick={()=>{
                console.log(this,'aa')
            }} autoPlay></audio>
            <Footer />
        </div>
    )
}
function mapStateTopProps(state){
    console.log(state)
    return state.audioResource;
  }
  
export default connect(mapStateTopProps)(index)


