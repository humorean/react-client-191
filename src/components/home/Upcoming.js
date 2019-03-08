// Use react-facebook for using plugin in reactjs
import React from 'react';
import {FacebookProvider, Page} from 'react-facebook';

class Upcoming extends React.Component{
    state={
        data: null
    }

    componentDidMount(){

    }
    
    render(){
        return(
            <div className='upcoming-events'>
                <h3>Up coming events:</h3>
                <FacebookProvider  appId='302281060440962'>
                    <Page 
                        href='https://www.facebook.com/Christmas-Village-365-2160486700935748/' 
                        tabs='events'
                        width='350'
                        smallHeader='true'
                        hideCover='false'
                        />
                </FacebookProvider>
            </div>
           
        )
    }
}

export default Upcoming;