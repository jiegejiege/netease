import React from 'react'
import { Grid } from 'antd-mobile';
function HotComment() {
    const data = Array.from(new Array(9)).map((_val, i) => ({
        icon: 'http://img4.imgtn.bdimg.com/it/u=2007870969,2735994731&fm=26&gp=0.jpg',
        text: '这是一段网易云音乐的测试文字',
      }));
      
     
    return (
        <div >
            <div>
              <div className="sub-title"> </div>
              <Grid data={data} square={false} className="not-square-grid"
              columnNum={2}
              hasLine='false'
              itemStyle={{color:'red',}}
              />
          </div>
        </div>
    )
}

export default HotComment
