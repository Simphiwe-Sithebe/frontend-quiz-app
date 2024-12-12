import React from "react";
import "../css/styles.css";

const subjects = ['HTML', 'CSS', 'JavaScript','Accessibility']

function RightSide(props) {
    return(
        <div className="right-section ">
            <ul>
                {subjects.map((subject, index) => (
                    <li key={index}><button onClick={()=>{props.onViewingChange(subject)}}>{subject}</button></li>
                ))}
            </ul>
        </div>
    );
}
export default RightSide;