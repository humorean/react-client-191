import React from 'react'
import {Link} from 'react-router-dom';
import { navFromPage } from '../../util'

class BriefHistory extends React.Component{
    render(){
        return(
            <div className='home-passage'>
                <h3>Brief History</h3>
                <p>The 191st Army Band, the "Band of the Wild West", is a military band of the U.S. Army Reserve posted at Camp Parks, California. Activated in 1943 as the 91st Infantry Division Band, the unit deployed to Europe in World War II where it fought in the Spring 1945 offensive in Italy. It received its current designation as the 191st Army Band in 2008. The 191st Army Band is a subordinate unit of the U.S. Army's 63rd Regional Support Command.</p>
                <Link to='/history' onClick={()=>{navFromPage('history')}}>  Learn more... </Link> 
            </div>
        )
    }
}

export default BriefHistory