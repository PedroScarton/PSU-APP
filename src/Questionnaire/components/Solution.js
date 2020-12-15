import React, { useEffect, useState } from 'react';

import { arrayToStatement } from '../../Shared/util/converter';
import close from '../../Assets/Icons/x.svg';
import './Solution.css';


const DUMMY_STATEMENT = [
    "Si $b\\ \\log_{2}(a) = 2$ , ¿cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?",
    "1.) Si $0 < a < 1$, entonces $b < 0$ \n\n 2.) Si $b > 1$, entonces $a > 2$\n\n3.) Si $a = \\sqrt{32}$ , entonces $b = 2,5$ ",

    "https://demre.cl/images/publicaciones/2021/large/tapa-resolucion-matematica-p2021-280px.jpg",

    "in texto normal"
]

const Solution = (props) => {

    const [solution, setSolution] = useState(null);

    useEffect(() => {
        const newSolution = arrayToStatement(DUMMY_STATEMENT);
        setSolution(newSolution);
    }, [setSolution])
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