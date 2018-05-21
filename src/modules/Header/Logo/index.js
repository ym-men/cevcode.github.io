import cx from 'classnames';
import React from 'react';
import logo from './Logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
    );
};
export default Logo;
