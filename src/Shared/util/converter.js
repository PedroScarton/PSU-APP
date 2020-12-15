import React from 'react';
import Markdown from '../../Shared/components/Math/Math';

export const getOption = (value) => {
    const option = <Markdown>{value}</Markdown>
    return option;
}


export const arrayToStatement = (array) => {
    let statementElements = [];
    for (let i = 0; i < array.length; i++) {
        if (isUrl(array[i])) {
            statementElements.push({ type: 'img', content: array[i] })
        } else {
            statementElements.push({ type: 'equation', content: array[i] })
        }
    }
    const statement = statementElements.map(item => item.type === 'equation' ?
        (
            <Markdown key={item.content}>{item.content}</Markdown>
        )
        :
        (
            <div key={item.content} style={{ width: '100%' }}>
                <img style={{ width: '100%' }} src={item.content} alt="pregunta" />
            </div>
        )
    )
    return statement;
}

const isUrl = (value) => {
    let expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (value.match(regex)) {
        return true;
    } else {
        return false;
    }
}