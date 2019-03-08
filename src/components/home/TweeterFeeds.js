import React from 'react';
import Instafeed from 'instafeed.js';

class TweeterFeeds extends React.Component{
    componentDidMount(){
        // var userFeed = new Instafeed({
        //     get: 'user',
        //     userId: '6025601939',
        //     accessToken:'YOUR_ACCESS_TOKEN'
        // });
        // userFeed.run();
    }
    render(){
        return(
            <div className='tweeter-feeds column'>
                TweeterFeeds:
                {/* <div id="instafeed"></div> */}
            </div>
        )
    }
}

export default TweeterFeeds;