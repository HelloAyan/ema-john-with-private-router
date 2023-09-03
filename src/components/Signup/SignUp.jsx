import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Signup = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        console.log(email, password, confirmPassword);

        setError('');
        if (password !== confirmPassword) {
            setError('Your Password did not match');
            return;
        }
        else if (password.length < 6) {
            setError('Your password must be 6 characters or longer');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                alert('User created successfully');
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
                    <div className='login_title'>Sign Up</div>
                    <form className='form_container' onSubmit={handleSignUp}>
                        <div className='form_section'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name='email' placeholder='hello@gmail.com' required />
                        </div>

                        <div className='form_section'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name='password' placeholder='Type your password' required />
                        </div>

                        <div className='form_section'>
                            <label htmlFor="password">Confirm Password:</label>
                            <input type="password" name='confirm_password' placeholder='Re-type your password' required />
                        </div>

                        <div className='form_section'>
                            <button className='login_button'>Sign Up</button>
                        </div>

                        <div className='form_section'>
                            <div className='new_to_emajohn' >Already have an account? &nbsp; <Link to={'/login'}> <span className='create_new_account'> Login </span> </Link> </div>
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

export default Signup;