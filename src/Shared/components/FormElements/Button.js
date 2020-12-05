import React from 'react';

import './Button.css';

const Button = (props) => {

    return (
        <button className={`button ${props.inverse && 'button--inverse'}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;