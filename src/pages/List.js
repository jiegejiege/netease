import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import AlbumList from '../components/AlbumList';
import router from 'umi/router'
function List(props) {
    console.log(props)
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
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} 
                        onClick={()=>{
                            console.log('search')                            
                            router.push('/search_album')
                        }}/>,
                        <Icon key="1" type="ellipsis" onClick={()=>{
                            (console.log('menu'))
                        }}/>,
                    ]}
                    >我的音乐列表</NavBar>
                </div>
                <div>
                    <AlbumList  id={props.location.query.id}/>
                </div>
        </div>
    )
}

export default List
