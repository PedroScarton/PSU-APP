import React, { useState, useEffect, useContext } from 'react';

import { useHttpClient } from '../../Shared/hooks/http-hook';
import { AuthContext } from '../../Shared/context/auth-context';

import Questionnaire from './Questionarie';
import Resume from './Resume';
import Solutionary from './Solutionary'
import ErrorModal from '../../Shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../Shared/components/UIElements/LoadingSpinner';

const Test = () => {

    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [stage, setStage] = useState('');
    const [ensayo, setEnsayo] = useState(null);
    const [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
        const getEnsayo = async () => {
            try {
                const respondeData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + `/test`,
                    'POST',
                    JSON.stringify({
                        numberOfQuestions: 20
                    }),
                    {
                        'Content-Type': 'application/json', Authorization: 'Bearer ' + auth.token
                    }
                );
                setEnsayo(respondeData);
                setStage('ensayo');

            } catch (err) {

            }
        }
        getEnsayo();
    }, [setStage, sendRequest, auth]);

    const nextStageHandler = (value) => {
        setStage(value)
    }

    const updateQuestionsHandler = (value, time = totalTime) => {
        const newEnsayo = ensayo;
        newEnsayo.test = value;
        setEnsayo(newEnsayo);
        setTotalTime(time);
    }

    console.log(ensayo);

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
                ensayo && stage === 'ensayo' && (
                    <Questionnaire
                        ensayo={ensayo.test}
                        updateQuestions={updateQuestionsHandler}
                        nextStage={nextStageHandler} />
                )
            }
            {
                ensayo && stage === 'resume' && (
                    <Resume
                        ensayo={ensayo}
                        updateQuestions={updateQuestionsHandler}
                        time={totalTime}
                        nextStage={nextStageHandler} />
                )
            }
            {
                ensayo && stage === 'solutions' && (
                    <Solutionary
                        ensayo={ensayo.test} />
                )
            }
        </React.Fragment>
    )

}

export default Test;