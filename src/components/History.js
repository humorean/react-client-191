import React from 'react';
import {Link} from 'react-router-dom';
class History extends React.Component{
    render(){
        return(
            <div className='ui container'>
                HISTORY PAGE
                <Link to='/' >Go back to Home</Link>
            </div>
        )
    }
}

export default History;