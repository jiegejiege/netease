import React from 'react'
import { Grid } from 'antd-mobile';
import router from 'umi/router'
function RecommendList() {
    
  const data1 = Array.from(new Array(6)).map(() => ({
    icon: 'http://img2.imgtn.bdimg.com/it/u=1755950913,3513678573&fm=26&gp=0.jpg',
  }));

      
    return (
        <div>
          <div className='recommend'>
          <h2  style={{ color: '#888', fontSize: '18px',margin:'5px',lineHeight:'30px'}}>新歌推荐</h2>
              <Grid data={data1}
              itemStyle={{margin:'5px',height:'140px'}}
                columnNum={3}
               
                square='false'
                renderItem={dataItem => (
                  <div style={{ padding: '0' }} onClick={()=>(router.push('/list'))}>
                    <img src={dataItem.icon} style={{ width: '100px', height: '100px',borderRadius:'8px' }} alt="" />
                    <div style={{ color: '#888', fontSize: '14px', marginTop: '' ,overflow:'hidden',height:'33px'}}>
                      <span>I am title.I am title.I am title.I am title..I am title...</span>
                    </div>
                  </div>
                )}
                hasLine={false}
              />
          </div>
          <div className='recommend'>
          <h2  style={{ color: '#888', fontSize: '18px',margin:'5px',lineHeight:'30px'}}>新碟</h2>
              <Grid data={data1}
              itemStyle={{margin:'5px',height:'140px'}}
                columnNum={3}
              
                square='false'
                renderItem={dataItem => (
                  <div style={{ padding: '0' ,}}>
                    <img src={dataItem.icon} style={{ width: '100px', height: '100px',borderRadius:'8px' }} alt="" />
                    <div style={{ color: '#888', fontSize: '14px', marginTop: '' ,overflow:'hidden',height:'33px'}}>
                      <span>I am title.I am title.I am title.I am title..I am title...</span>
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
