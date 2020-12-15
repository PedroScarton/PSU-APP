import React, { useState, useEffect } from 'react';

import AppBar from '../../Shared/components/Navigation/appBar';
import Button from '../../Shared/components/FormElements/Button';
import Statement from '../components/Statement';
import Question from '../components/Question';
import Solution from '../components/Solution';

import './Solutionary.css';



const Solutionary = (props) => {
    // const [question, setQuestion] = useState(null);
    const [option, setOption] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [actulQuestion, setActualQuestion] = useState(0);
    const [question, setQuestion] = useState(null);
    const [last, setLast] = useState(false);

    useEffect(() => {
        if (props.ensayo) {
            setQuestion(props.ensayo[0]);
        }
    }, [props.ensayo])

    useEffect(() => {
        if (question && props.ensayo[19].id === question.id) {
            setLast(true);
        } else {
            setLast(false);
        }
    }, [question, props.ensayo])

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

    const nextQuestionHandler = (event) => {
        event.preventDefault()

        //encuentro el indice de la pregunta en el arreglo de preguntas
        const questionIndex = props.ensayo.findIndex(item => item.id === question.id);

        //reiniciamos valores
        setOption(props.ensayo[questionIndex + 1].selected);

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
        setOption(nextOption);

        //cambio la pregunta y el numero de la app bar
        setQuestion(props.ensayo[actulQuestion - 1]);
        setActualQuestion(prevState => prevState - 1);
    }

    const modalHandler = () => {
        setOpenModal(prev => prev = !prev)
    }

    console.log('entra')


    return (
        <React.Fragment>
            <AppBar time>
                <p>{actulQuestion + 1}/20</p>
            </AppBar>
            {
                question &&
                (<main className="solutionary">
                    <div className="solutionary__questions">
                        <Statement statement={question.statement} />
                        <Question question={question} solutions options={getOptions()} />
                    </div>
                    <Solution question={question.answer.description} open={openModal} modalHandler={modalHandler} />
                    <div className="solutionary__buttons">
                        <Button
                            type="text"
                            disabled={actulQuestion === 0}
                            onClick={previusQuestionHandler}
                            inverse
                            size="150px">
                            Anterior
                    </Button>
                        <Button
                            type={last ? null : "text"}
                            to={last ? "/" : null}
                            onClick={last ? null : nextQuestionHandler}
                            size="150px">
                            Siguiente
                    </Button>
                    </div>
                </main>
                )
            }
        </React.Fragment>
    )

}

export default Solutionary;