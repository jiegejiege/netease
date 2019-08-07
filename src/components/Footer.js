import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import lyy from '../assets/lyy.jpg'
import { Icon, Grid } from 'antd-mobile';

function Footer() {
    const list = [
        'check-circle', 
      ];
    return (
        <div id='footer'>
            <Card.Header
                title="This is title"
                thumb={lyy}
                extra={<Icon type="check" />}
                thumbStyle={{ background: 'red',width:'50px',height:'50px',borderRadius:'50%'}}
            />
      
        </div>
    )
}

export default Footer
