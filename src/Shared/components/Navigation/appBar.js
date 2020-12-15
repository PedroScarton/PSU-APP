import React from 'react';
import { useHistory } from 'react-router-dom'

import LeftArrow from '../../../Assets/Icons/arrow-left.svg';
import './appBar.css';

const AppBar = (props) => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }
    return (
        <header className="appBar">
            <button onClick={goBack}>
                <img src={LeftArrow} alt="" />
            </button>
            <div className={`appBar--single ${props.time && 'appBar--double'}`}>
                {props.children}
            </div>
        </header>
    );
}

export default AppBar;