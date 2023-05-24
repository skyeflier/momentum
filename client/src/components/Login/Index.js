import React, { useRef } from 'react';
import './Login.css';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';
// import { User } from '../../../../server/models';


const Login = (props) => {
    const [login, { error }] = useMutation(LOGIN_USER);
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        // e.preventDefault();
        try {
            const mutationResponse = await login({
                variables: payload,
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
            const user = mutationResponse.data.login.user;
            props.onLogin(user);
        } catch (e) {
            console.log(e);
        }
        // props.onLogin(payload);
    };

    return (
        <form className='login' onSubmit={handleSubmit}>
            <h4>Login</h4>
            <p>Login with your email password</p>

            <div className='login__controls'>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input
                        ref={emailRef}
                        type='email'
                        placeholder='john@gmail.com'
                        className='login__email'
                        id='email'
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input
                        ref={passwordRef}
                        type='password'
                        className='login__email'
                        id='password'
                    />
                </div>
            </div>

            <div className='login__action'>
                <input type='submit' value='Submit' className='btn login__submit' />
            </div>
        </form>
    );
};

export default Login;
