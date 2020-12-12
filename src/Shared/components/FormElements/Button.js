import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {

    if (props.to) {
        return (
            <Link
                to={props.to}
                exact={props.exact}
                className={`button ${props.inverse &&
                    'button--inverse'}`}
                style={{ width: props.size }}
            >
                {props.children}
            </Link>
        )
    }

    return (
        <button
            type={props.type}
            className={`button ${props.inverse && 'button--inverse'} ${props.disabled && 'button--disabled'}`}
            style={{ width: props.size }}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;