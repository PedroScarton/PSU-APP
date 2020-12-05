import React from 'react';

import AppBar from '../../Shared/components/Navigation/appBar';
import Input from '../../Shared/components/FormElements/Input';
import Button from '../../Shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../Shared/util/validators';
import { useForm } from '../../Shared/hooks/form-hook';
import './Register.css';

const Register = () => {
    const inputs = {
        nombre: {
            value: '',
            isValid: false
        },
        apellido: {
            value: '',
            isValid: false
        },
        correo: {
            value: '',
            isValid: false
        },
        contraseña: {
            value: '',
            isValid: false
        }
    }; 
    const [formState, inputHandler] = useForm(inputs, false);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    return (
        <React.Fragment>
            <AppBar onClick={null} />
            <div className="register">
                <form onSubmit={submitHandler}>
                    <div className="register_inputs">
                        <Input
                            id="nombre"
                            label="Nombre"
                            type="text"
                            validators={[VALIDATOR_REQUIRE()]}
                            onInput={inputHandler}
                        />
                        <Input
                            id="apellido"
                            label="Apellido"
                            type="text"
                            validators={[VALIDATOR_REQUIRE()]}
                            onInput={inputHandler}
                        />
                        <Input
                            id="correo"
                            label="Correo"
                            type="text"
                            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                            onInput={inputHandler}
                        />
                        <Input
                            id="contraseña"
                            label="Contraseña"
                            type="text"
                            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                            onInput={inputHandler}
                        />
                    </div>
                    <Button type="submit">Aceptar</Button>
                </form>
            </div>
        </React.Fragment >
    );
}

export default Register;