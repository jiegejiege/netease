import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router'
function Detail() {
    return (
        <div id='Detail'>
                <div >
                    <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {console.log('onLeftClick')
                    router.go(-1)
                }}
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                    >醉清风</NavBar>
                </div>
                
            
        </div>
    )
}

export default Detail
