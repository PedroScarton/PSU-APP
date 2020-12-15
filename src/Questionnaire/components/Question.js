import React, { useEffect, useState } from 'react';

import { getOption } from '../../Shared/util/converter';
import Input from '../../Shared/components/FormElements/Input';
import './Question.css';

const Question = (props) => {

    const [actualValue, setActualValue] = useState('option1');

    useEffect(() => {
        if (props.question.selected) {
            setActualValue(props.question.selected)
        } else {
            setActualValue('')
        }

    }, [props.question])

    const changeHandler = (value) => {
        setActualValue(value);
        if (!props.solutions) {
            props.questionSelected(value);
        }
    }

    let elements = (
        props.options.map(option => (
            <Input
                key={option}
                type="radio"
                id={option}
                selected={actualValue}
                value={option}
                changeHandler={changeHandler}
                label={getOption(option)}
                disabled={props.solutions} />
        ))
    )

    if (props.solutions) {
        props.options.map(option => (
            <Input
                key={option}
                type="radio"
                id={option}
                selected={actualValue}
                value={option}
                changeHandler={changeHandler}
                label={getOption(option)}
                disabled={props.solutions}
                incorrect={!props.question.correct}
                correct={props.question.correct} />
        ))
    }


    return (
        <div className="question-form">
            {elements}
        </div>
    );
}


export default Question;