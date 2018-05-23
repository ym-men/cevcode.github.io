import React from 'react';
import { Row, Column } from 'ui/Layout';
import cx from 'classnames';
import Title from 'ui/Title';
import Description from 'ui/Description';

const OperationItem = props => {
  const { status, title, operation } = props;
  return (
    <Row
      className={cx('operation__item', `operation__item-${status}`)}
      jc="space-between"
    >
      <Column>
        <Title containerClassName="operation__title">{title}</Title>
        {/*<Description>{new Date()}</Description>*/}
      </Column>
      <Row jc="flex-end">
        <p className="operation__amount">
          {operation.income ? operation.income : '--'}
        </p>
        <p className="operation__amount">
          {operation.expence ? operation.expence : '--'}
        </p>
      </Row>
    </Row>
  );
};

export default OperationItem;
