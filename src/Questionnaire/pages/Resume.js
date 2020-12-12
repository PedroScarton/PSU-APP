import React from 'react';

import AppBar from '../../Shared/components/Navigation/appBar';
import Clock from '../../Assets/Icons/clock.svg';
import Button from '../../Shared/components/FormElements/Button';
import Card from '../../Shared/components/UIElements/Card'

import './Resume.css';

const Resume = (props) => {

    return (
        <React.Fragment>
            <AppBar time>
                <p>20/20</p>
                <div className="appBar_clock">
                    <p>5:55</p>
                    <img src={Clock} alt="" />
                </div>
            </AppBar>
            <main className="resume__main">
                <Card className="resume--card">
                    <h3>Resumen</h3>
                    <div className="resume--data">
                        <p><span>Puntaje: </span>{props.score}</p>
                        <p><span>Correctas: </span>{props.correct}</p>
                        <p><span>Incorrectas: </span>{props.wrong}</p>
                        <p><span>Sin responder: </span>{props.notAnswered}</p>
                        <p><span>Tiempo total: </span>{props.totalTime}</p>
                    </div>
                </Card>
                <Button to={"/solutions"}>Ver soluciones</Button>
            </main>
        </React.Fragment>
    )

}

export default Resume;