import React from 'react';

import AppBar from '../../Shared/components/Navigation/appBar';
import Statement from '../components/Statement';
import Button from '../../Shared/components/FormElements/Button';
import Clock from '../../Assets/Icons/clock.svg';
import './Questionarie.css';

const Questionarie = () => {

    return (
        <React.Fragment>
            <AppBar time>
                <p>20/20</p>
                <div className="appBar_clock">
                    <p>5:55</p>
                    <img src={Clock} alt="" />
                </div>
            </AppBar>
            <main className="questionarie">
                <form onSubmit={null}>
                    <div className="questionarie__questions">
                        <div>
                            <Statement question={'Si P = 1,76 ¿Cuál es el valor de 10P?'} />
                        </div>
                        <div>
                            <Question options={null}/> 
                        </div>
                    </div>
                    <div className="questionarie__buttons">
                        <Button
                            type="text"
                            onClick={() => console.log('anterior')}
                            inverse>
                            Anterior
                    </Button>
                        <Button
                            type="text"
                            onClick={() => console.log('siguiente')}>
                            Siguiente
                    </Button>
                    </div>
                </form>
            </main>
        </React.Fragment>
    )

}

export default Questionarie;