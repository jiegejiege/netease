import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import AlbumList from '../components/AlbumList';
import router from 'umi/router'
function List() {
    return (
        <div id='list_album'>
              <div >
                    <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {console.log('onLeftClick')
                    router.go(-1)
                }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >我的音乐列表</NavBar>
                </div>
                <div>
                    <AlbumList />
                </div>
        </div>
    )
}

export default List
