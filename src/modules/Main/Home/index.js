import React from 'react';
import { Column, Row } from 'ui/Layout';
import Form from './components/form';
import Filters from './components/filters';
import OperationsList from 'modules/Operations/list';

const Home = () => {
  return (
    <Column>
      <Form />
      <Filters />
      <OperationsList />
    </Column>
  );
};

export default Home;
