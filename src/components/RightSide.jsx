import React from "react";
import "../css/styles.css";
import {Link} from "react-router";

const subjects = ['HTML', 'CSS', 'Javascript','Accessibilty']

function RightSide() {
    return(
        <div className="right-section ">
            <ul>
                {subjects.map((subject, index) => (
                    <li key={index}><Link to={`/quiz/${subject.toLowerCase()}`}>{subject}</Link></li>
                ))}
            </ul>
        </div>
    );
}
export default RightSide;