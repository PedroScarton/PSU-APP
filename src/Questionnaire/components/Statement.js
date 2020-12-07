import React from 'react';

import './Statement.css';

const Statement = (props) => {

    return (
        <div className="statement">

            <h4>
                Enunciado:
            </h4>

            <div className="statement__description">
                <p>{props.question}</p>
            </div>

        </div>
    )

}

export default Statement;

