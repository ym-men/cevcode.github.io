import React from 'react';
import { Column, Row } from 'ui/Layout';
import config from './config';
import OperationItem from './item';

const OperationsList = props => {
  console.log(config);
  return (
    <Column>
      {config.map((operation, i) => <OperationItem {...operation} key={i} />)}
    </Column>
  );
};

export default OperationsList;
