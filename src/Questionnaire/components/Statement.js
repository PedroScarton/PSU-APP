import React, { useEffect, useState } from 'react';

import { arrayToStatement } from '../../Shared/util/converter';
import './Statement.css';


const Statement = (props) => {


    const [statement, setStatement] = useState(null);

    useEffect(() => {
        const newStatement = arrayToStatement(props.statement);
        setStatement(newStatement);
    }, [setStatement, props.statement])


    return (
        <div className="statement">

            <h4>
                Enunciado:
            </h4>

            <div className="statement__description">
                <div>
                    {statement && statement}
                </div>
            </div>

        </div>
    )

}

export default Statement;