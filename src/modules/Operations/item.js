import React from 'react';
import { Row, Column } from 'ui/Layout';
import cx from 'classnames';
import Title from 'ui/Title';
import Description from 'ui/Description';
import Price from 'ui/Price';

const OperationItem = ({ operation }) => {
  const { status, description, currency, currencySelect, onClick } = operation;
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
        {/*<Description>{new Date().getTime()}</Description>*/}
      </Column>
      <Row jc="flex-end">
        <div className="operation__amount">
          <Price
            currency={status.expence && currencySelect.label}
            amount={status.expence && currency}
          />
        </div>
        <div className="operation__amount">
          <Price
            currency={status.income && currencySelect.label}
            amount={status.income && currency}
          />
        </div>
      </Row>
      <div onClick={() => onClick}>x</div>
    </Row>
  );
};

export default OperationItem;
