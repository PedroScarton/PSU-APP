import React from 'react';

import {VALIDATOR_REQUIRE,VALIDATOR_EMAIL,VALIDATOR_MINLENGTH} from '../../Shared/util/validators'
import { useForm } from '../../Shared/hooks/form-hook'

import AppBar from '../../Shared/components/Navigation/appBar';
import Input from '../../Shared/components/FormElements/Input';
import Button from '../../Shared/components/FormElements/Button';
import './Login.css'

const Login =()=>{
    const inputs={
        correo:{
            value:'',
            isValid: false
        },
        contraseña:{
            value:'',
            isValid: false
        }
    }
    const [formState, inputHandler] = useForm(inputs,false);

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(formState.inputs)
    }
    
    
    return(
        <React.Fragment>
            <AppBar onClick={null}/>
            <div className="login">
                <form onSubmit={submitHandler}>
                    <div className="login_inputs">
                        <Input 
                            id="correo"
                            label="Correo"
                            type="text"
                            validators={[VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]}
                            onInput={inputHandler}
                        />
                        <Input 
                            id="contraseña"
                            label="Contraseña"
                            type="password"
                            validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(6)]}
                            onInput={inputHandler}
                        />
                    </div>
                    <Button type="submit">Aceptar</Button>
                </form>
            </div>

        </React.Fragment>
    );
    
}


export default Login;