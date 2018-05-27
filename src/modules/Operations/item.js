import React from 'react';
import { Row, Column } from 'ui/Layout';
import cx from 'classnames';
import Title from 'ui/Title';
import firebase from 'firebase';
import Description from 'ui/Description';
import { firebaseConnect } from 'react-redux-firebase';
import Price from 'ui/Price';
import { prettifyTimestamp } from './helpers';

const OperationItem = ({ operation, id }) => {
  const { status, description, currency, currencySelect, time } = operation;
  const ref = firebase.ref('/operations');
  const removeItem = (id, ref) => {
    ref.child(id).remove();
  };
  console.log('test', status.income && +currency);
  return (
    <Row
      className={cx(
        'operation__item',
        `operation__item-${status.income || status.expence}`
      )}
      jc="space-between"
    >
      <Column>
        <Title containerClassName="operation__title">{description}</Title>
        <Description className="operation__title">
          {prettifyTimestamp(time)}
        </Description>
      </Column>
      <Row jc="flex-end">
        <div className="operation__amount">
          <Price
            currency={status.expence && currencySelect.label}
            amount={status.expence && +currency}
          />
        </div>
        <div className="operation__amount">
          <Price
            currency={status.income && currencySelect.label}
            amount={status.income && +currency}
          />
        </div>
      </Row>
      <div className="operation__remove" onClick={() => removeItem(id, ref)} />
    </Row>
  );
};

export default firebaseConnect()(OperationItem);
