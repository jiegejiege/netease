import React from 'react'
import { Card,  } from 'antd-mobile';
import lyy from '../assets/lyy.jpg'
import { Icon,  } from 'antd-mobile';
function Footer() {
    
    return (
        <div id='footer'>
            <Card.Header
                title="This is title"
                thumb={lyy}
                extra={<div><Icon type="check" /></div>}
                thumbStyle={{ background: 'red',width:'50px',height:'50px',borderRadius:'50%'}}
            />
      
        </div>
    )
}

export default Footer
