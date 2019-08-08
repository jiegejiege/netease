import React, { Component } from 'react'
import Banner from '../components/Banner';

import RecommendList from '../components/RecommendList';

export class Recommend extends Component {
    render() {
        return (
            <div>
                <Banner />
                <RecommendList />
            </div>
        )
    }
}

export default Recommend
