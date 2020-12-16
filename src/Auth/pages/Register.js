import React, { useContext } from 'react';

import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../Shared/util/validators'
import { useForm } from '../../Shared/hooks/form-hook'
import { useHttpClient } from '../../Shared/hooks/http-hook';
import { AuthContext } from '../../Shared/context/auth-context';

import AppBar from '../../Shared/components/Navigation/appBar';
import Input from '../../Shared/components/FormElements/Input';
import ErrorModal from '../../Shared/components/UIElements/ErrorModal';
import Button from '../../Shared/components/FormElements/Button';
import LoadingSpinner from '../../Shared/components/UIElements/LoadingSpinner';
import './Register.css'

const Register = () => {

    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

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
    }
    const [formState, inputHandler] = useForm(inputs, false);

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + '/user',
                'POST',
                JSON.stringify({
                    firstname: formState.inputs.nombre.value,
                    lastname: formState.inputs.apellido.value,
                    email: formState.inputs.correo.value,
                    password: formState.inputs.contraseña.value
                }),
                {
                    'Content-type': 'application/json'
                }
            );

            const data = responseData.data;
            auth.login(data.userName, data.accessToken);
        } catch (err) {

        }
    }

    return (
        <React.Fragment>
            <AppBar />
            <ErrorModal error={error} onClear={clearError} />
            <main className="register">
                {
                    isLoading && (
                        <div className="loadingSpinner--center">
                            <LoadingSpinner />
                        </div>
                    )
                }
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
                            type="password"
                            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                            onInput={inputHandler}
                        />
                    </div>
                    <Button type="submit">Aceptar</Button>
                </form>
            </main>

        </React.Fragment>
    );
}

export default Register;