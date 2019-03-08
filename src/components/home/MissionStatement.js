import React from 'react';
import { connect } from 'react-redux';
import { setNavigation } from '../../actions';

function MissionStatement(props){
    return(   
        <div className='home-passage'>
            <h3 className='home-title'>Mission Statement</h3>
            <p className='home-text'>
                The 191st Army Band takes pride in representing the United States Army and the 63rd Regional Support Command (RSC) to local communities of the San Francisco Bay Area. Through music we join our fellow Army Bands in providing support to troops, instilling in our Soldiers the will to fight and win, fostering the support of our citizens, and promoting our national interests. 
            </p>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        currentPage:state.currentPage
    }
}
export default connect(mapStateToProps,{setNavigation})(MissionStatement);

