import React from 'react';
import { Row, Column } from 'ui/Layout';
import cx from 'classnames';
import Title from 'ui/Title';
import Description from 'ui/Description';

const OperationItem = props => {
  const { status, title, operation } = props;
  console.log(22, operation.income);
  return (
    <Row className={cx('operation__item', `operation__item_${status}`)}>
      <Column>
        <Title>{title}</Title>
        {/*<Description>{new Date()}</Description>*/}
      </Column>
      <Column>
        <div>{operation.income ? operation.income : '--'}</div>
      </Column>
      <Column>
        <div>{operation.expence ? operation.expence : '--'}</div>
      </Column>
    </Row>
  );
};

export default OperationItem;
