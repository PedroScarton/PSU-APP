import React, { useEffect, useState } from 'react';

import AppBar from '../../Shared/components/Navigation/appBar';
import Button from '../../Shared/components/FormElements/Button';
import Card from '../../Shared/components/UIElements/Card'

import './Resume.css';
import Cronometro from '../components/Cronometro';

const Resume = (props) => {

    const [score, setScore] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [textTime, setTextTime] = useState('00:00');

    useEffect(() => {

        const getTestInfo = (ensayo) => {
            const newQuestions = ensayo.test;
            let correct = 0;
            let wrong = 0;

            for (let i = 0; i < newQuestions.length; i++) {
                const correctOption = newQuestions[i].answer.correctOption;
                const userAnswer = newQuestions[i].selected;
                const options = [newQuestions[i].option1, newQuestions[i].option2, newQuestions[i].option3, newQuestions[i].option4, newQuestions[i].option5]
                const optionSelected = options.findIndex(option => option === userAnswer);
                if (optionSelected === correctOption) {
                    correct += 1;
                    newQuestions[i].correct = true;
                } else {
                    wrong += 1;
                    newQuestions[i].correct = false;
                }
            }
            const score = ensayo.scores[correct];

            props.updateQuestions(newQuestions);

            return { correct, wrong, score };
        }

        const { correct, wrong, score } = getTestInfo(props.ensayo);
        const newTime = timerHandler(props.time);
        setTextTime(newTime);
        setCorrect(correct);
        setWrong(wrong);
        setScore(score);
    }, [props])

    const timerHandler = (time) => {
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;


        var ret = "";
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }

    const endResumeHandler = (event) => {
        event.preventDefault();
        //actualizo el stage para cambiar de pagina
        props.nextStage('solutions');
    }

    return (
        <React.Fragment>
            <AppBar time>
                <p></p>
                <Cronometro time={props.time}/>
            </AppBar>
            <main className="resume__main">
                <Card className="resume--card">
                    <h3>Resumen</h3>
                    <div className="resume--data">
                        <p><span>Puntaje: </span>{score}</p>
                        <p><span>Correctas: </span>{correct}</p>
                        <p><span>Incorrectas: </span>{wrong}</p>
                        <p><span>Tiempo total: </span>{textTime}</p>
                    </div>
                </Card>
                <Button onClick={endResumeHandler}>Ver soluciones</Button>
            </main>
        </React.Fragment>
    )

}

export default Resume;