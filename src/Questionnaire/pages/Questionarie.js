import React, { useEffect, useState } from 'react';

import Statement from '../components/Statement';
import Question from '../components/Question';
import Button from '../../Shared/components/FormElements/Button';
import AppBar from '../../Shared/components/Navigation/appBar';
import Cronometro from '../components/Cronometro';
import './Questionarie.css';

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

const Questionarie = (props) => {

    const [question, setQuestion] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const [last, setLast] = useState(false);
    const [time, setTime] = useState(0);
    const [option, setOption] = useState(null);
    const [actulQuestion, setActualQuestion] = useState(0);

    useEffect(() => {
        if (props.ensayo) {
            setQuestion(props.ensayo[0]);
        }
    }, [props.ensayo])

    useEffect(() => {
        if (question && props.ensayo[2].id === question.id) {
            setLast(true);
        } else {
            setLast(false);
        }
    }, [question, props.ensayo])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(seconds => seconds + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [setTime])

    const getOptions = () => {
        const options = [
            question.option1,
            question.option2,
            question.option3,
            question.option4,
            question.option5
        ]
        return options;
    }

    const questionSelectedHandler = (value) => {
        setOption(value);
        setIsSelected(true);
    }

    const nextQuestionHandler = (event) => {
        event.preventDefault()
        //encuentro el indice de la pregunta en el arreglo de preguntas
        const questionIndex = props.ensayo.findIndex(item => item.id === question.id);

        //actualizo la respuesta para la pregunta actual
        question.selected = option;

        //copio el ensayo en un nuevo objeto por seguridad y guardo en este objeto la pregunta con su respuesta actualizada en la posición donde debe ir
        const newQuestions = props.ensayo;
        newQuestions[questionIndex] = question;

        //actulizo el objeto de preguntas global para test
        props.updateQuestions(newQuestions, time);

        //reiniciamos valores
        setIsSelected(false);
        setOption(null);

        //cambio la pregunta y el numero del app bar
        setQuestion(props.ensayo[actulQuestion + 1]);
        setActualQuestion(prevState => prevState + 1);
    }

    const previusQuestionHandler = (event) => {
        event.preventDefault();

        //debemos obtener el valor de la pregunta que se esta accediendo
        const questionIndex = props.ensayo.findIndex(item => item.id === question.id);

        //copio la pregunta anterior
        const nextQuestion = props.ensayo[questionIndex - 1];

        //copio el valor de la opción seleccionada por el usuario
        const nextOption = nextQuestion.selected;


        //enviarle el valor a los inputs y colocarlo como valor actual y que esta seleccionado algo
        setIsSelected(true);
        setOption(nextOption);

        //cambio la pregunta y el numero de la app bar
        setQuestion(props.ensayo[actulQuestion - 1]);
        setActualQuestion(prevState => prevState - 1);
    }

    const endTestHandler = (event) => {
        event.preventDefault()
        //actualizo el stage para cambiar de pagina
        props.nextStage('resume');
    }

    // let last = false;
    // if (DUMMY_QUESTION[-1].id === question.id) {
    //     last = true;
    // }

    return (
        <React.Fragment>
            <AppBar time>
                <p>{actulQuestion + 1}/20</p>
                <Cronometro time={time} />
            </AppBar>
            {
                question && (
                    <main className="questionarie">
                        <form onSubmit={(event) => event.preventDefault()}>
                            <div className="questionarie__questions">
                                <Statement question={'Si P = 1,76 ¿Cuál es el valor de 10P?'} />
                                <Question question={question} options={getOptions()} questionSelected={questionSelectedHandler} />
                            </div>
                            <div className="questionarie__buttons">
                                <Button
                                    type="text"
                                    disabled={actulQuestion === 0}
                                    onClick={previusQuestionHandler}
                                    inverse
                                    size="150px">
                                    Anterior
                                </Button>
                                <Button
                                    type="text"
                                    disabled={!isSelected}
                                    onClick={last ? endTestHandler : nextQuestionHandler}
                                    size="150px">
                                    {last ? 'Finalizar' : 'Siguiente'}
                                </Button>
                            </div>
                        </form>
                    </main>
                )
            }
        </React.Fragment>
    )

}

export default Questionarie;