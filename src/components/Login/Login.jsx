import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='login_main_body'>
                <div className='login_body_center'>
                    <div className='login_title'>Login</div>
                    <form className='form_container'>
                        <div className='form_section'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder='hello@gmail.com' required />
                        </div>

                        <div className='form_section'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder='Type your password' required />
                        </div>

                        <div className='form_section'>
                            <button className='login_button'>Login</button>
                        </div>

                        <div className='form_section'>
                            <div className='new_to_emajohn' >New to Ema-john? &nbsp; <Link to={'/signup'} > <span className='create_new_account'> Create a new account </span> </Link> </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;