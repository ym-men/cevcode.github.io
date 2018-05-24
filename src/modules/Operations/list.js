import React from 'react';
import { Column, Row } from 'ui/Layout';
import OperationItem from './item';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const OperationsList = ({ data, firebase }) => {
  const operations = !isLoaded(data)
    ? 'Loading'
    : isEmpty(data)
      ? 'Todo list is empty'
      : Object.keys(data).map((operation, i) => (
          <OperationItem {...operation} key={i} />
        ));
  return <Column>{operations}</Column>;
};

const mapStateToProps = state => ({
  data: state.firebase.data.data
});

export default compose(
  firebaseConnect(['operations']),
  connect(mapStateToProps)
)(OperationsList);
