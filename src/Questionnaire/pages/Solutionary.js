import React, { useState } from 'react';

import AppBar from '../../Shared/components/Navigation/appBar';
import Clock from '../../Assets/Icons/clock.svg';
import Button from '../../Shared/components/FormElements/Button';
import Statement from '../components/Statement';
import Question from '../components/Question';
import Solution from '../components/Solution';

import './Solutionary.css';

const DUMMY_QUESTION = {
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

}

const options = [
    DUMMY_QUESTION.option1,
    DUMMY_QUESTION.option2,
    DUMMY_QUESTION.option3,
    DUMMY_QUESTION.option4,
    DUMMY_QUESTION.option5
]


const Solutionary = () => {
    // const [question, setQuestion] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const [openModal, setOpenModal] = useState(false)

    const questionSelectedHandler = () => {
        setIsSelected(true);
    }

    const nextQuestionHandler = () => {
        console.log('siguiente')
    }

    const previusQuestionHandler = () => {
        console.log('anterior')
    }

    const modalHandler = () => {
        setOpenModal(prev => prev = !prev)
    }


    return (
        <React.Fragment>
            <AppBar time>
                <p>20/20</p>
                <div className="appBar_clock">
                    <p>5:55</p>
                    <img src={Clock} alt="" />
                </div>
            </AppBar>
            <main className="solutionary">
                <div className="solutionary__questions">
                    <Statement question={'Si P = 1,76 ¿Cuál es el valor de 10P?'} />
                    <Question solutions options={options} questionSelected={questionSelectedHandler} />
                </div>
                <Solution open={openModal} modalHandler={modalHandler}/>
                <div className="solutionary__buttons">
                    <Button
                        type="text"
                        onClick={previusQuestionHandler}
                        inverse
                        size="150px">
                        Anterior
                    </Button>
                    <Button
                        type="text"
                        disabled={!isSelected}
                        onClick={nextQuestionHandler}
                        size="150px">
                        Siguiente
                    </Button>
                </div>
            </main>
        </React.Fragment>
    )

}

export default Solutionary;