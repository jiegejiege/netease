import React from 'react'
import { Grid } from 'antd-mobile';

function RecommendList() {
    
      
      const data1 = Array.from(new Array(11)).map(() => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
      }));
    return (
        <div>
    <Grid data={data1}
      columnNum={3}
      square='false'
      renderItem={dataItem => (
        <div style={{ padding: '12.5px' }}>
          <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
            <span>I am titlelorem loremlI am titlelorem loremI am titlelorem lorem</span>
          </div>
        </div>
      )}
    />
        </div>
    )
}

export default RecommendList
