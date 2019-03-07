import React from 'react';
import {Link} from 'react-router-dom';

import Upcoming from './home/Upcoming';
import MissionStatement from './home/MissionStatement';
import TweeterFeeds from './home/TweeterFeeds';

class Home extends React.Component{
    render(){
        return(
            <div className='home ui three column doubling stackable grid container'>
                <MissionStatement />
                <Upcoming />
                <TweeterFeeds />
            </div>
        )
    }
}

export default Home;