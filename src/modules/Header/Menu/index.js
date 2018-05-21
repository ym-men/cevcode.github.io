import React from 'react';
import MenuItem from './components/MenuItem';
import config from './config';

const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                {config.map((item, i) => <MenuItem text={item.text} href={item.href} counter={item.counter} key={i} />)}
            </ul>
        </nav>
    );
};

export default Menu;
