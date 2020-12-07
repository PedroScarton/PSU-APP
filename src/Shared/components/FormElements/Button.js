import React from 'react';

import './Button.css';

const Button = (props) => {

    return (
        <button
            type={props.type}
            className={`button ${props.inverse && 'button--inverse'}`}
            style={{width: props.size}}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;