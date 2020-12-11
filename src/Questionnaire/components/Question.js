import React, { useState } from 'react';

import Input from '../../Shared/components/FormElements/Input';
import './Question.css';

const Question = (props) => {

    const [actualValue, setActualValue] = useState('option1');

    const changeHandler = (value) => {
        props.questionSelected();
        setActualValue(value);
    }

    const elements = (
        props.options.map(option => (
            <Input
                key={option}
                type="radio"
                id={option}
                selected={actualValue}
                value={option}
                changeHandler={changeHandler}
                label={option} />
        ))
    )


    return (
        <div className="question-form">
            {elements}
        </div>
    );
}


export default Question;