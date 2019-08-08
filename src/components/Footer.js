import React from 'react'
import lyy from '../assets/lyy.jpg'


function Footer() {
    
    return (
        <div id='footer'>
            <div className='footer_contain'>
                <div style={{marginLeft:'0px'}}><img src={lyy}  alt=''/></div>
                <span style={{width:'50vw',overflow:'hidden',height:'50px',whiteSpace:'nowrap',fontSize:'15px'
                ,color:'black',
                paddingLeft:'10px'
            }}>从你的全世界路过</span>
                <span className='iconfont icon-yduishangyiqu' onClick={()=>console.log(('aa'))}>
                    
                    </span>
                <span onClick={()=>console.log(('bb'))}>▶ </span>
                <span onClick={()=>console.log(('cc'))}
                style={{float:'right'}}
                >≡</span>
            </div>
      
        </div>
    )
}

export default Footer
