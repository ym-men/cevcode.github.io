import React from 'react';
import { Column, Row } from 'ui/Layout';
import Description from 'ui/Description';
import Select from 'ui/Fields/Select';
import CurrencyInput from 'ui/Fields/CurrencyInput';

const Filters = () => {
  return (
    <Row className="filters" ai="center" jc="flex-end">
      <Select size="s" placeholder="$" />
      <Description>€ => $</Description>
      <CurrencyInput curNoLimit={true} />
    </Row>
  );
};

export default Filters;
