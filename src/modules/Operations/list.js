import React from 'react';
import { Column, Row } from 'ui/Layout';
import OperationItem from './item';
import { connect } from 'react-redux';

const OperationsList = props => {
  const operations = props.operations.list;
  return (
    <Column>
      {operations.map((operation, i) => (
        <OperationItem {...operation} key={i} />
      ))}
    </Column>
  );
};

const mapStateToProps = state => ({
  operations: state.operations
});

export default connect(mapStateToProps)(OperationsList);
