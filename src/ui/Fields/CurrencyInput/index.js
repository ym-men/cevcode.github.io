import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import cx from 'classnames';

const currencyMask = createNumberMask({
  prefix: '',
  integerLimit: 2
});

const formValue = value => {
  if (value === 0) return 0;
  if (!value) return '';
  return value;
};

const CurrencyInput = props => {
  return (
    <MaskedInput
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      disabled={props.disabled}
      mask={currencyMask}
      guide={true}
      className={cx('ux-input', props.className)}
      placeholder="0"
      value={formValue(props.value)}
      onChange={e => e.target.value}
    />
  );
};
export default CurrencyInput;
