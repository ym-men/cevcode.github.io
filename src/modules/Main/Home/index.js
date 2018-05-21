import React from 'react';
import { Column, Row } from 'ui/Layout';
import Select from 'ui/Fields/Select';
import CurrencyInput from 'ui/Fields/CurrencyInput';
import Input from 'ui/Fields/Input';
import Button from '../../../ui/Button';

const About = () => {
  return (
    <Row className="filters" ai="flex-start" jc="space-between">
      <Select />
      <CurrencyInput />
      <Input />
      <Button text="add " />
    </Row>
  );
};

export default About;
