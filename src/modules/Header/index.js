import React from 'react';
import { Row } from '../../ui/Layout/index.js';
import Title from 'ui/Title';

class Header extends React.PureComponent {
  render() {
    return (
      <Row className="header" jc="space-between">
        <Title>Home Finance</Title>
      </Row>
    );
  }
}

export default Header;
