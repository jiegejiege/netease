import React from 'react'
import { Card, WingBlank,} from 'antd-mobile';
import HotComment from '../components/HotComment';
function Search() {
    
    return (
        <div id='Search'>
            <div className='hotComment'>
            <WingBlank size="lg">
                <Card>
                <Card.Body>
                    <div>云村热评墙</div>
                </Card.Body>
                <Card.Footer content="今日热评已更新，快来围观吧！" extra={<div>August.06</div>} />
                </Card>
            </WingBlank>
            </div>
            <div className='hotComment-img'>
                <HotComment />
            </div>
        </div>
    )
}

export default Search
