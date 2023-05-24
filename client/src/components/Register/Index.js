import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import './Register.css';
import { ADD_USER } from '../../utils/mutations';

const Register = (props) => {

    const [addUser, { error }] = useMutation(ADD_USER);
    const fullNameRef = useRef();
    // const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: fullNameRef.current.value,
            // phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        // props.onRegister(payload);
        try {
            const mutationResponse = await addUser({
                variables: payload,
            });
            // const token = mutationResponse.data.addUser.token;
            // const user = mutationResponse.data.addUser.user;

            // Auth.login(token);
            props.onRegister()
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <form className='register' onSubmit={handleSubmit}>
            <h4>Register</h4>
            <p>Register with your email password</p>

            <div className='register__controls'>
                <div className='form-control'>
                    <label htmlFor='email'>Full Name</label>
                    <input
                        ref={fullNameRef}
                        type='text'
                        placeholder='Alica'
                        className='register__full-name'
                        id='userName'
                    />
                </div>

                {/* <div className='form-control'>
					<label htmlFor='email'>Phone Number</label>
					<input
						// ref={phoneRef}
						type='text'
						placeholder='+182838353'
						className='register__phone-number'
						id='email'
					/>
				</div> */}
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input
                        ref={emailRef}
                        type='email'
                        placeholder='john@gmail.com'
                        className='register__email'
                        id='email'
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input
                        ref={passwordRef}
                        type='password'
                        className='register__email'
                        id='password'
                    />
                </div>
            </div>

            <div className='register__actions'>
                <input type='submit' value='Submit' className='btn register__submit' />
            </div>
        </form>
    );
};

export default Register;