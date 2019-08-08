/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';


export class Banner extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        list:[],
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['http://p1.music.126.net/8GPZ91i0rBteF33MEPJHHQ==/109951164270648824.jpg',
             'http://p1.music.126.net/9_dNZTgyyn92UnULaNYLAQ==/109951164270667361.jpg'],
          });
        }, 100);
      }
    render() {
        return (
            <div>
              
                       <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      
            </div>
        )
    }
}

export default Banner
