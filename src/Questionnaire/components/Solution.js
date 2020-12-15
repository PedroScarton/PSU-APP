import React, { useEffect, useState } from 'react';

import { arrayToStatement } from '../../Shared/util/converter';
import close from '../../Assets/Icons/x.svg';
import './Solution.css';


const Solution = (props) => {

    const [solution, setSolution] = useState(null);

    useEffect(() => {
        const newSolution = arrayToStatement(props.solution);
        setSolution(newSolution);
    }, [setSolution, props.solution])
    return (
        <div
            className={`${props.open ? 'solution--open' : 'solution'}`}>
            <div
                className={`${props.open ? 'solution__container--open' : 'solution__container'}`}>
                <div className={`${props.open ? 'solution__header--open' : 'solution__header'}`}>
                    <p>Solución:</p>
                    <button
                        onClick={props.modalHandler}
                        style={{ transform: props.open ? 'rotate(0deg)' : 'rotate(45deg)' }}>
                        <img src={close} alt="" className={`solution__icon`} />
                    </button>
                </div>
                <div className={`${props.open ? 'solution__statement--open' : 'solution__statement'}`}>
                    {solution && solution}
                </div>
            </div>
        </div>
    )
}


export default Solution;