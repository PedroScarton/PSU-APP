import React, { useState, useEffect, useContext } from 'react';

import { useHttpClient } from '../../Shared/hooks/http-hook';
import { AuthContext } from '../../Shared/context/auth-context';

import Questionnaire from './Questionarie';
import Resume from './Resume';
import Solutionary from './Solutionary'
import ErrorModal from '../../Shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../Shared/components/UIElements/LoadingSpinner';

const DUMMY_QUESTIONS = [
    {
        id: 1,
        statement: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero',
            '<img src={} alt=""/>',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero'
        ],
        option1: 'Esta es la opción 1',
        option2: 'Esta es la opción 2',
        option3: 'Esta es la opción 3',
        option4: 'Esta es la opción 4',
        option5: 'Esta es la opción 5',
        difficulty: "MEDIUM",
        answer: {
            id: 1,
            correctOption: 2,
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero',
                '<img/>',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero'
            ]
        }

    },
    {
        id: 2,
        statement: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero',
            '<img src={} alt=""/>',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero'
        ],
        option1: 'Esta es la opción 1',
        option2: 'Esta es la opción 2',
        option3: 'Esta es la opción 3',
        option4: 'Esta es la opción 4',
        option5: 'Esta es la opción 5',
        difficulty: "MEDIUM",
        answer: {
            id: 1,
            correctOption: 2,
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero',
                '<img/>',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero'
            ]
        }

    },
    {
        id: 3,
        statement: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero',
            '<img src={} alt=""/>',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero'
        ],
        option1: 'Esta es la opción 1',
        option2: 'Esta es la opción 2',
        option3: 'Esta es la opción 3',
        option4: 'Esta es la opción 4',
        option5: 'Esta es la opción 5',
        difficulty: "MEDIUM",
        answer: {
            id: 1,
            correctOption: 2,
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero',
                '<img/>',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit sapien metus, in faucibus sem rutrum malesuada. Vivamus eleifend justo libero'
            ]
        }

    }
]

const Test = () => {

    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [stage, setStage] = useState('');
    const [questions, setQuestions] = useState(null);
    const [totalTime, setTotalTime] = useState(null);

    useEffect(() => {
        // const getEnsayo = async () => {

        // }
        const response = {
            ensayo: true
        };
        if (response.ensayo) {
            setStage('ensayo')
        }
    }, [setStage]);

    const nextStageHandler = (value) => {
        setStage(value)
    }

    const updateQuestionsHandler = (value, time) => {
        setQuestions(value)
        setTotalTime(time);
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {
                isLoading && (
                    <div className="loadingSpinner--center">
                        <LoadingSpinner />
                    </div>
                )
            }
            {
                stage === 'ensayo' && (
                    <Questionnaire
                        ensayo={DUMMY_QUESTIONS}
                        updateQuestions={updateQuestionsHandler}
                        nextStage={nextStageHandler} />
                )
            }
            {
                stage === 'resume' && (
                    <Resume
                        ensayo={DUMMY_QUESTIONS}
                        updateQuestions={updateQuestionsHandler}
                        nextStage={nextStageHandler} />
                )
            }
            {
                stage === 'solutions' && (
                    <Solutionary
                        ensayo={DUMMY_QUESTIONS}
                        updateQuestions={updateQuestionsHandler} />
                )
            }
        </React.Fragment>
    )

}

export default Test;