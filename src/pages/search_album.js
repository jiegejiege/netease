import React, { Component } from 'react'
import { SearchBar, WhiteSpace,  } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router'
export default class search_album extends Component {
    state = {
        value: '美食',
      };
      componentDidMount() {
        this.autoFocusInst.focus();
      }
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      }
    render() {
        return (
            <div id="search_album">
                <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => router.go(-1)}
                    
                    >搜索音乐</NavBar>
                </div>
                <div >
                   
                    <SearchBar 
                    placeholder="搜索" ref={ref => this.autoFocusInst = ref} 
                    onSubmit={value => console.log(value, 'onSubmit')}
                    />
                    <WhiteSpace />
                    </div>

            </div>
        )
    }
}
