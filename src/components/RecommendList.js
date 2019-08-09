import React, { useEffect, useState } from 'react';
import { Grid } from 'antd-mobile';
import router from 'umi/router'
import { getReco,getNewSong } from '../services/all_in_one';

function RecommendList() {
    
  // const data1 = Array.from(new Array(6)).map(() => ({
  //   icon: 'http://img2.imgtn.bdimg.com/it/u=1755950913,3513678573&fm=26&gp=0.jpg',
  // }));
  const [data1, setData1] = useState(1);
  const [data2, setData2] = useState(1);
  useEffect(() => {
    
    getReco().then(res => {
      console.log(res.data.playlists)
      var arr=res.data.playlists.slice(0,9)
      setData1(arr)
    });
  }, []);
  useEffect(() => {
    
    getNewSong().then(res => {
      console.log(res.data.playlists)
      var arr2=res.data.playlists.slice(0,9)
      setData2(arr2)
    });
  }, []);
    return (
        <div>
          <div className='recommend'>
          <h2  style={{ color: '#888', fontSize: '18px',margin:'5px',lineHeight:'30px'}}>推荐歌单</h2>
              <Grid data={data1}
              itemStyle={{margin:'5px',height:'140px'}}
                columnNum={3}
               
                square='false'
                renderItem={dataItem => (
                  <div style={{ padding: '0' }} onClick={
                    ()=>
( router.push({ pathname : '/list' ,query : { id: dataItem.id } }))}>
                    <img src={dataItem.coverImgUrl} style={{ width: '100px', height: '100px',borderRadius:'8px' }} alt="" />
                    <div style={{ color: '#888', fontSize: '14px', width:'100px',margin:'0 auto',overflow:'hidden',height:'33px'}}>
                      <span>{dataItem.name}</span>
                    </div>
                  </div>
                )}
                hasLine={false}
              />
          </div>
          <div className='recommend'>
          <h2  style={{ color: '#888', fontSize: '18px',margin:'5px',lineHeight:'30px'}}>新碟</h2>
              <Grid data={data2}
              itemStyle={{margin:'5px',height:'140px'}}
                columnNum={3}
              
                square='false'
                renderItem={dataItem => (
                  <div style={{ padding: '0' }} onClick={
                    ()=>
( router.push({ pathname : '/list' ,query : { id: dataItem.id } }))}>
                    <img src={dataItem.coverImgUrl} style={{ width: '100px', height: '100px',borderRadius:'8px' }} alt="" />
                    <div style={{ color: '#888', fontSize: '14px', width:'100px',margin:'0 auto',overflow:'hidden',height:'33px'}}>
                      <span>{dataItem.name}</span>
                    </div>
                  </div>
                )}
                hasLine={false}
                
              />
              
          </div>
        </div>
        
    )
}

export default RecommendList
