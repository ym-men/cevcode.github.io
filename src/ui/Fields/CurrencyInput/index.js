import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import cx from 'classnames';

const currencyMask = createNumberMask({
  prefix: '',
  integerLimit: 2
});

const currencyMaskNoLimit = createNumberMask({
  prefix: '',
  integerLimit: 10
});

const formValue = value => {
  if (value === 0) return 0;
  if (!value) return '';
  return value;
};

const CurrencyInput = ({
  onFocus,
  onBlur,
  disabled,
  className,
  value,
  curNoLimit = false
}) => {
  return (
    <MaskedInput
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      mask={curNoLimit ? currencyMaskNoLimit : currencyMask}
      guide={true}
      className={cx('ux-input', className)}
      placeholder="0"
      value={formValue(value)}
      onChange={e => e.target.value}
    />
  );
};
export default CurrencyInput;
