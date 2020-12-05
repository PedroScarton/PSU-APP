import React from 'react';

import Button from '../../Shared/components/FormElements/Button';

import './Start.css';

const Start = () => {
    return (
        <React.Fragment>
            <div className="start_title">
                <h1>PSU APP</h1>
            </div>
            <div className="center">
                <div className="start_buttons">
                    <Button onClick={() => console.log('hola')} >Iniciar sesión</Button>
                    <Button onClick={() => console.log('hola')} inverse>Registrarse</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Start;