import React, { useContext } from 'react';

import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../Shared/util/validators'
import { useForm } from '../../Shared/hooks/form-hook'
import { useHttpClient } from '../../Shared/hooks/http-hook';
import { AuthContext } from '../../Shared/context/auth-context';

import AppBar from '../../Shared/components/Navigation/appBar';
import Input from '../../Shared/components/FormElements/Input';
import Button from '../../Shared/components/FormElements/Button';
import LoadingSpinner from '../../Shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../Shared/components/UIElements/ErrorModal'
import './Login.css'

const Login = () => {

    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const inputs = {
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
                process.env.REACT_APP_BACKEND_URL + '/auth/login',
                'POST',
                JSON.stringify({
                    email: formState.inputs.correo.value,
                    password: formState.inputs.contraseña.value
                }),
                {
                    'Content-type': 'application/json'
                }
            );
            const userName = responseData.firstname + responseData.lastname;
            auth.login(userName, responseData.token);
        } catch (err) {

        }
    }


    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            <AppBar onClick={null} />
            <main className="login">
                {
                    isLoading && (
                        <div className="loadingSpinner--center">
                            <LoadingSpinner />
                        </div>
                    )
                }
                <form onSubmit={submitHandler}>
                    <div className="login_inputs">
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


export default Login;