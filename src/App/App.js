import React from 'react';
import '../theme/scss/App.scss';
import { Column, Row } from '../ui/Layout';
import Header from '../modules/Header';
import Main from '../modules/Main';

const App = () => (
    <div className="App">
        <Column className="container">
            <Header />
            <Main />
        </Column>
    </div>
);

export default App;
