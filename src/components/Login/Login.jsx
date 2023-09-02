import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div class="login-container">
                <h2 class="page-title">Login</h2>
                <form>
                    <input type="text" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" class="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;