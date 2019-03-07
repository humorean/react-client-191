import React from 'react';
import {Link} from 'react-router-dom';

function MissionStatement(){
    return(
        <div className='mission-statement column'>
            <p>
                The 191st Army Band takes pride in representing the United States Army and the 63rd Regional Support Command (RSC) to local communities of the San Francisco Bay Area. Through music we join our fellow Army Bands in providing support to troops, instilling in our Soldiers the will to fight and win, fostering the support of our citizens, and promoting our national interests. <Link to='/History'>Learn more... </Link> 
            </p>
        </div>
    )
}

export default MissionStatement;