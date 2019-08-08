import React from 'react'
import { Card, WhiteSpace } from 'antd-mobile';
function AlbumList() {
    return (
        <div>
             <WhiteSpace size="lg" />
             <div className='list_l'>
                    <Card full>
                    <Card.Body>
                        <div>绿色</div>
                    </Card.Body>
                    <Card.Footer content="陈雪凝-绿色" extra={<div>&#xe64e;</div>} />
                    </Card>
            </div>
            <div className='list_l'>
                    <Card full>
                    <Card.Body>
                        <div>绿色</div>
                    </Card.Body>
                    <Card.Footer content="陈雪凝-绿色" extra={<div>&#xe64e;</div>} />
                    </Card>
            </div>
            <div className='list_l'>
                    <Card full>
                    <Card.Body>
                        <div>绿色</div>
                    </Card.Body>
                    <Card.Footer content="陈雪凝-绿色" extra={<div>&#xe64e;</div>} />
                    </Card>
            </div>
        </div>
    )
}

export default AlbumList
