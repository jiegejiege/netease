
import { Card, WhiteSpace } from 'antd-mobile';
import router from 'umi/router';
import React, { Component } from 'react'
import {connect} from 'dva'
import { getAlbumDetail, getSongUrl, getSongDetail } from '../services/all_in_one';


 class AlbumList extends Component {
    // location.search.split("=")[1]
    state={
        list:[]
    }
    
    tap(id){
            getSongUrl(id)
            .then(res=>{
                this.props.dispatch({type:'audioResource/setAudioResource',
                payload:res.data.data[0].url})
            });
           // console.log(this.props)
           getSongDetail(id).then(res=>{
               this.props.dispatch({type:'audioResource/setSongDetail',
                payload:{name:res.data.songs[0].name,picUrl:res.data.songs[0].al.picUrl}
            })
           })
           console.log(this.props )
    }
    componentDidMount(){
        // console.log(this.props.id )
        getAlbumDetail(this.props.id).then(res=>(this.setState(
            {list:[...res.data.playlist.tracks]}
           // ,console.log(res.data.playlist.tracks)
        )))
        
        
    }
    render() {
        
        return (
            <div>
            <WhiteSpace size="lg" />
            {
                this.state.list.map(item=>(
                    <div className='list_l' onClick={this.tap.bind(this,item.id)} key={item.id}>
                   <Card full>
                   <Card.Body>
                       <div>{item.name}</div>
                   </Card.Body>
                   <Card.Footer content={item.ar[0].name} extra={<div></div>} />
                   </Card>
           </div>
                ))
            }
       </div>
        )
    }
}

export default connect(state=>state.audioResource)(AlbumList)