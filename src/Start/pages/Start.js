import React from 'react';

import Button from '../../Shared/components/FormElements/Button';

// import { MathComponent } from 'mathjax-react'

import './Start.css';

const Start = () => {

    return (
        <React.Fragment>
            <div className="start_title">
                <h1>PSU APP</h1>
            </div>
            <div className="center">
                <div className="start_buttons">
                    <Button to={"/login"} >Iniciar sesión</Button>
                    <Button to={"/signup"} inverse>Registrarse</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Start;