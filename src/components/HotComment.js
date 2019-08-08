import React, { useEffect, useState } from 'react';
import { Grid } from 'antd-mobile';
import { getHotComment } from '../services/all_in_one';
function HotComment() {
      const [data1, setData1] = useState(1);
      const data = Array.from(data1).map((_val, i) => ({
        icon: _val.sharePicUrl,
        text: _val.title,
      }));
      useEffect(() => {
    
        getHotComment().then(res => {
          //console.log(res.data.hot)
          
          setData1(res.data.hot)
        });
      }, []);
     
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
