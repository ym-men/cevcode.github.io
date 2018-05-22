import React from 'react';
import { Column, Row } from 'ui/Layout';
import Select from 'ui/Fields/Select';
import CurrencyInput from 'ui/Fields/CurrencyInput';
import Input from 'ui/Fields/Input';
import Button from 'ui/Button';

const Form = () => {
  return (
    <Row className="form" ai="flex-start">
      <Select />
      <Select size="s" placeholder="$" />
      <CurrencyInput />
      <Input className="form__description" />
      <Button text="add " />
    </Row>
  );
};

export default Form;
