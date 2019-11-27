import React from 'react'
import { Link } from 'react-router-dom'
import Time from "./Time";

const Header = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mt-0">
        <div>
            <Link className='navbar-brand' to='/'>My React App</Link>
        </div>

        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
        </ul>

        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Time preText="Es ist" afterText="Uhr" />
            </li>
        </ul>

    </nav>
);

export default Header
