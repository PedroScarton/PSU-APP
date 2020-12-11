import React from 'react';

import './Button.css';

const Button = (props) => {

    return (
        <button
            type={props.type}
            className={`button ${props.inverse && 'button--inverse'} ${props.disabled && 'button--disabled'}`}
            style={{width: props.size}}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;