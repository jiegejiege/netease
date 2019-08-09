
import React, { Component } from 'react'
import lyy from '../assets/lyy.jpg'
import {connect} from 'dva'

let audio=document.getElementById('audi')
    let playicon=document.getElementById('playicon')
    const play=()=>{
                if(audio.paused==null||audio.paused===true){
                    audio.play();
                    playicon.innerHTML="="
                }else{
                    audio.pause()
                    playicon.innerHTML="▶"
                }
        }
export class Footer extends Component {
    componentDidUpdate(){
        console.log(this.props.songDetail)
    }
    render() {
        return (
            <div id='footer'>
            <div className='footer_contain'>
                <div style={{marginLeft:'0px'}}><img src={this.props.songDetail[this.props.songDetail.length-1].picUrl}  alt=''/></div>
                <span style={{width:'50vw',overflow:'hidden',height:'50px',whiteSpace:'nowrap',fontSize:'15px'
                ,color:'black',
                paddingLeft:'10px'
            }}>{this.props.songDetail[this.props.songDetail.length-1].name}</span>
                <span >
                    </span>
                <span id='playicon' onClick={()=>{play()}}>= </span>
                <span onClick={()=>console.log(('cc'))}
                style={{float:'right'}}
                >≡</span>
            </div>
      
        </div>
        )
    }
}

export default connect(state=>state.audioResource)(Footer)
