import React, { useEffect, useState } from 'react';

import Input from '../../Shared/components/FormElements/Input';
import './Question.css';

const Question = (props) => {

    const [actualValue, setActualValue] = useState('option1');

    useEffect(() => {
        if(props.question.selected) {
            setActualValue(props.question.selected)
        } else {
            setActualValue('')
        }

    }, [props.question])

    const changeHandler = (value) => {
        setActualValue(value);
        props.questionSelected(value);
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
                label={option}
                disabled={props.solutions} />
        ))
    )


    return (
        <div className="question-form">
            {elements}
        </div>
    );
}


export default Question;