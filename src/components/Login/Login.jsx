import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const [error, setError] = useState('');
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');

        if (password.length < 6) {
            setError('Your password must be 6 characters or longer ');
            return;
        }

        loginUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                setError(errorMessage);
            })



    }
    return (
        <>
            <div className='login_main_body'>
                <div className='login_body_center'>
                    <div className='login_title'>Login</div>
                    <form className='form_container' onSubmit={handleLogin}>
                        <div className='form_section'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name='email' placeholder='hello@gmail.com' required />
                        </div>

                        <div className='form_section'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name='password' placeholder='Type your password' required />
                        </div>

                        <div className='form_section'>
                            <button className='login_button'>Login</button>
                        </div>

                        <div className='form_section'>
                            <div className='new_to_emajohn' >New to Ema-john? &nbsp; <Link to={'/signup'} > <span className='create_new_account'> Create a new account </span> </Link> </div>
                        </div>

                        <div className='form_section'>
                            <div className='text_error'>{error}</div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;