import React from 'react';
import { Grid } from 'semantic-ui-react';

import Upcoming from './home/Upcoming';
import MissionStatement from './home/MissionStatement';
import VisionStatement from './home/VisionStatement';
import BriefHistory from './home/BriefHistory';
// import TweeterFeeds from './home/TweeterFeeds';

class Home extends React.Component{
    render(){
        return(
            <Grid className='home ui two column doubling stackable grid container'>
                <Grid.Column width={10}>
                    <MissionStatement />
                    <VisionStatement />
                    <BriefHistory />
                </Grid.Column>
                <Grid.Column width={5}>
                    <Upcoming />
                </Grid.Column>
            </Grid>
        )
    }
}

export default Home;