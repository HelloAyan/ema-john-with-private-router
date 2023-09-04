import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then((result) => { })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                {user && <span>Welcome, {user.displayName} <button onClick={handleLogout}>Log Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;