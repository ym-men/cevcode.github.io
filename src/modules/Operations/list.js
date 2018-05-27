import React from 'react';
import { Column, Row } from 'ui/Layout';
import OperationItem from './item';
import Price from 'ui/Price';
import cx from 'classnames';
import Title from 'ui/Title';
import Loader from 'ui/loader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const buildOperations = (operations = {}) => {
  if (!isLoaded(operations)) {
    return <Loader />;
  }
  if (isEmpty(operations)) {
    return <span>list is empty...</span>;
  }
  return Object.keys(operations)
    .map(key => (
      <OperationItem key={key} id={key} operation={operations[key]} />
    ))
    .reverse();
};

const getBalance = (operations = {}) => {
  if (!isEmpty(operations)) {
    let getExpence = Object.keys(operations).map(
      key => operations[key].status.expence && operations[key].currency
    );
    getExpence = getExpence.filter(function(n) {
      if (n !== undefined) {
        return n;
      }
    });
    let getIncome = Object.keys(operations).map(
      key => operations[key].status.income && operations[key].currency
    );
    getIncome = getIncome.filter(function(n) {
      if (n !== undefined) {
        return n;
      }
    });

    function arraySum(array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += +array[i];
      }
      return sum;
    }

    const summ = arraySum(getIncome) - arraySum(getExpence);
    const checkPrice = summ < 0;
    return (
      <Price
        className={cx('form__price', checkPrice && 'form__price-negative')}
        currency={'$'}
        amount={Math.abs(summ)}
      />
    );
  }
};
const OperationsList = ({ operations = {} }) => {
  return (
    <Column>
      <Column>{buildOperations(operations)}</Column>
      <Row jc="flex-end" ai="center" className="form__bottom">
        <Title>Balance</Title>
        {getBalance(operations)}
      </Row>
    </Column>
  );
};

const mapStateToProps = state => ({
  operations: state.firebase.data.operations
});

export default compose(
  firebaseConnect(['operations']),
  connect(mapStateToProps)
)(OperationsList);
