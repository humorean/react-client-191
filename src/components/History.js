import React from 'react';
import {Link} from 'react-router-dom';
class History extends React.Component{
    render(){
        return(
            <div className='ui container'>
                <h2>HISTORY PAGE</h2>
                <Link to='/' >Go back to Home</Link>
                <div className='history-detail'>
                    <p>Constituted 2 August 1943 in the Organized Reserves as the Band, 91st Infantry Division</p>
                    <p>Organized 12 August 1943 while in active military service at Camp White, Oregon</p>
                    <p>Redesignated 1 December 1943 as the 91st Infantry Division Band</p>
                    <p>Inactivated 16 November 1945 at Camp Rucker, Alabama</p>
                    <p>(Organized Reserves redesignated 25 March 1948 as the Organized Reserve Corps; redesignated 9 July 1952 as the Army Reserve) </p>
                    <p>Activated 1 April 1950 at San Francisco, California</p>
                    <p>Reorganized and redesignated 1 May 1959 as the 91st Division Band</p>
                    <p>Reorganized and redesignated 20 January 1968 as the band element of the Support Company and Band, 91st Division</p>
                    <p>Location changed 28 February 1968 to Sausalito, California</p>
                    <img className='history-image' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/36572633_2023178051086755_6461353138019368960_o.jpg?_nc_cat=105&_nc_ht=scontent-sjc3-1.xx&oh=dc0628ee643e55a1c95c7cfc4ade7d0b&oe=5D0B466C' />
                    <p>Reorganized and redesignated 1 November 1970 as Headquarters and Headquarters Company and Band, 91st Support Battalion, an element of the 91st Division</p>
                    <p>Reorganized and redesignated 1 April 1971 as Headquarters, Headquarters Detachment and Band, 91st Support Battalion</p>
                    <p>Inactivated 16 October 1978 at Sausalito, California</p>
                    <p>Band element withdrawn 16 November 1982 from Headquarters Detachment and Band, 91st Support Battalion, and relieved from assignment to the 91st Division; concurrently redesignated as the 891st Army Band and activated at Sausalito, California </p>
                    <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/22042132_1650286888375875_6128035347943429662_o.jpg?_nc_cat=108&_nc_ht=scontent-sjc3-1.xx&oh=11a939e1924e56d8d04261889d2242cf&oe=5D2562FF' />
                    <p>Reorganized and redesignated 17 September 1983 as the band element of Headquarters Company, 91st Division</p>
                    <p>Band element withdrawn 16 September 1988 from Headquarters Company, 91st Division; concurrently reorganized and redesignated as the 91st Division Band</p>
                    <p>(91st Division reorganized and redesignated 1 October 1993 as the 91st Division (Exercise); on 17 October 1999 as the 91st Division (Training Support))</p>
                    <p>Location changed 1 July 2000 to Dublin, California</p>
                    <p>Ordered into active military service 27 January 2003 at Dublin, California; released from active military service 24 July 2004 and reverted to reserve status</p>
                    <p>Reorganized and redesignated 16 October 2008 as the 191st Army Band; concurrently relieved from assignment to the 91st Division (Training Support)</p>

                </div>
            </div>
        )
    }
}

export default History;