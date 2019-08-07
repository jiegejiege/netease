import React from 'react'
import router from 'umi/router'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
function NavBar() {
    const tabs = [
        { title: <Badge text={''}>我的</Badge> ,a:'My'},
        { title: <Badge text={''}>发现</Badge> ,a:''},
        { title: <Badge >云村</Badge> ,a:'Search',},
        {title: <Badge >视频</Badge> ,a:'movie'},
      ];
    return (
        <div className='header'>
            
            <div>
                <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab.a); 
                
            }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab);
                router.push('/'+tab.a)
            }}
                tabBarActiveTextColor='red'
                tabBarUnderlineStyle={{borderColor:'red'}}
                >
                
                </Tabs>
                
            </div>
        </div>
    )
}

export default NavBar
