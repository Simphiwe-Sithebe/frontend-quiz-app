import React from 'react'
import "../css/styles.css";
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function HomePage(props){
    return(
        <div className="home-container">
            <LeftSide />
            <RightSide {...props} />
       </div>
    );
    
}
export default HomePage;