import React from 'react';
import { Row, Column } from '../../ui/Layout/index.js';
import Menu from './Menu';
import Logo from './Logo';

class Header extends React.PureComponent {
    render() {
        return (
            <Row className="header" jc="space-between">
                <Logo />
                <Menu />
            </Row>
        );
    }
}

export default Header;
