import React from 'react'
import "../css/styles.css";
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function HomePage(){
    return(
        <div className="home-container">
            <LeftSide />
            <RightSide />
       </div>
    );
    
}
export default HomePage;