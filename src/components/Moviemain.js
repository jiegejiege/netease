import React from 'react'
import { Card, } from 'antd-mobile';
function Moviemain() {
    return (
        <div className='movie_main'>
           <div className='mov'>
                <video src='https://vfx.mtime.cn/Video/2017/01/28/mp4/170128094656851772.mp4' controls="controls"></video>
                    <Card>
                    <Card.Header
                        title="从你的全世界路过，你就不要想起我"
                        extra={<img alt='' src='http://img4.imgtn.bdimg.com/it/u=3446926048,2269705642&fm=26&gp=0.jpg'/>}
                    />
                    
                    </Card>
                    <Card>
                    <Card.Header
                        title="西虹市炒番茄"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<div><span>赞</span><span>comment</span></div>}
                    />
                    </Card>
           </div>
           <div className='mov'>
                <video src='https://vfx.mtime.cn/Video/2017/01/28/mp4/170128094656851772.mp4' controls="controls"></video>
                    <Card>
                    <Card.Header
                        title="从你的全世界路过，你就不要想起我"
                        extra={<img alt='' src='http://img4.imgtn.bdimg.com/it/u=3446926048,2269705642&fm=26&gp=0.jpg'/>}
                    />
                    
                    </Card>
                    <Card>
                    <Card.Header
                        title="西虹市炒番茄"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<div><span>赞</span><span>comment</span></div>}
                    />
                    </Card>
           </div>
           
        </div>
    )
}

export default Moviemain

