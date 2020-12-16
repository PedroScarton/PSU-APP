import React, { useReducer, useEffect, useState } from 'react';

import { validate } from '../../util/validators';

import eyeOn from '../../../Assets/Icons/eye.svg'
import eyeOff from '../../../Assets/Icons/eye-off.svg'
import Check from '../../../Assets/Icons/check.svg';
import './Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}

const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isTouched: false, isValid: false });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    const [passwordMode, setPasswordMode] = useState('password')
    const [eyeMode, setEyeMode] = useState(true)



    useEffect(() => {
        if (props.type !== 'radio') {
            onInput(id, value, isValid)
        }
    }, [id, onInput, value, isValid, props.type])


    const changeHandler = event => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators });
    }

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        })
    }

    const showPasswordHandler = (event) => {
        event.preventDefault();
        setEyeMode(false)
        setPasswordMode('text')
    }

    const hidePasswordHandler = (event) => {
        event.preventDefault();
        setEyeMode(true)
        setPasswordMode('password')
    }


    let element;
    if (props.type === 'text') {
        element = (
            <input
                id={id}
                type={props.type}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={value} />
        )
    } else if (props.type === 'textarea') {
        element = (
            <textarea
                id={id}
                rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={value} />
        )
    } else if (props.type === 'password') {
        element = (
            <React.Fragment>
                {
                    eyeMode ? (
                        <button onClick={showPasswordHandler}>
                            <img src={eyeOn} alt="" />
                        </button>
                    ) : (
                            <button onClick={hidePasswordHandler}>
                                <img src={eyeOff} alt="" />
                            </button>
                        )
                }

                <input
                    autoComplete="off" autoCorrect="off"
                    id={id}
                    type={passwordMode}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={value} />

            </React.Fragment>
        )
    } else if (props.type === 'radio') {
        return (
            <div className={`form-control-radio 
            ${props.selected === props.value ? 'form-control-radio--selected' : 'form-control-radio--not-selected'}
            ${props.incorrect && 'form-control-radio--incorrect'} 
            ${props.correct &&'form-control-radio--correct'}
            ${props.correctOption && 'form-control-radio--correct-not-selected'}`}>
                <label htmlFor={props.id}>
                    {props.label}
                    <input
                        id={id}
                        type={props.type}
                        checked={props.selected === props.value}
                        onChange={() => props.changeHandler(props.value)}
                        value={props.value}
                        disabled={props.disabled}
                    />
                    <span className={`${props.selected === props.value ? 'form-control-radio__check--selected' : 'form-control-radio__check--not-selected'}`}>
                        <img src={Check} alt="" />
                    </span>
                </label>
            </div>
        )
    }

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    )
}

export default Input;