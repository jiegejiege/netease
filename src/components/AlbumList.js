
import { Card, WhiteSpace } from 'antd-mobile';
import router from 'umi/router';
import React, { Component } from 'react'
import { parse } from 'qs';
export default class AlbumList extends Component {
    // location.search.split("=")[1]
    
    componentDidMount(){
        console.log(this.props)
        // const queryData = parse(window.location.search, {
        //     ignoreQueryPrefix: true, // 忽略掉?
        //   });
        // console.log(queryData.id)
     
    }
    render() {
        
        return (
            <div>
            <WhiteSpace size="lg" />
            <div className='list_l' onClick={()=>{router.push('/detail')}}>
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
}
