import React, { Component } from 'react'
import Banner from '../components/Banner';
import './recommend.css'
import RecommendList from '../components/RecommendList';

export class Recommend extends Component {
    render() {
        return (
            <div>
                <Banner />
                <h3>热歌推荐</h3>
                <RecommendList />
            </div>
        )
    }
}

export default Recommend
