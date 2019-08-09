
import { Card, WhiteSpace } from 'antd-mobile';
import router from 'umi/router';
import React, { Component } from 'react'
import { getAlbumDetail } from '../services/all_in_one';
export default class AlbumList extends Component {
    // location.search.split("=")[1]
    state={
        list:[]
    }
    componentDidMount(){
        console.log(this.props.id )
        getAlbumDetail(this.props.id).then(res=>(this.setState(
            {list:[...res.data.playlist.tracks]}
        )))
        

        // const queryData = parse(window.location.search, {
        //     ignoreQueryPrefix: true, // 忽略掉?
        //   });
        // console.log(queryData.id)
     
    }
    render() {
        
        return (
            <div>
            <WhiteSpace size="lg" />
            {
                this.state.list.map(item=>(
                    <div className='list_l' onClick={()=>{router.push('/detail')}} key={item.id}>
                   <Card full>
                   <Card.Body>
                       <div>{item.name}</div>
                   </Card.Body>
                   <Card.Footer content={item.ar[0].name} extra={<div>&#xe64e;</div>} />
                   </Card>
           </div>
                ))
            }
           
           
       </div>
        )
    }
}
