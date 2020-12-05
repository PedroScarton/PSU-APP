import React from 'react';

import LeftArrow from '../../../Assets/Icons/arrow-left.svg';
import './appBar.css';

const appBar = (props) => {
    return (
        <div className="appBar">
            <button onClick={props.onClick}>
                <img src={LeftArrow} alt=""/>
            </button>
            <div className={`appBar--single ${props.time && 'appBar--double'}`}> 
                {props.children}
            </div>
        </div>
    );
}

export default appBar;