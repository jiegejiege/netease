import React, { Component } from 'react'
import { List } from 'antd-mobile';
const Item = List.Item;
//const Brief = Item.Brief;

export class Mylist extends Component {
    
    state = {
        disabled: false,
      }
    render() {
        return (
            <div>
                   <List >
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >本地音乐<span>(455)</span></Item>

        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
         最近播放<span>(100)</span>
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >下载管理<span>(455)</span></Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的电台<span>(3)</span></Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的收藏<span>(2)</span></Item>
      </List> 
      <List >
      <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的收藏<span>(2)</span></Item>
      </List>
            </div>
        )
    }
}

export default Mylist
