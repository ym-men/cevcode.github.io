import React from 'react';
import MaskedInput from 'react-text-mask';
import { withFormsy } from 'formsy-react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import cx from 'classnames';
import { removeSeparators } from './helpers';

const currencyMask = createNumberMask({
  prefix: '',
  integerLimit: 10,
  thousandsSeparatorSymbol: ' ',
  allowDecimal: true
});

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(removeSeparators(event.currentTarget.value));
  }

  render() {
    const { onFocus, onBlur, disabled, className, name } = this.props;
    const errorMessage = this.props.getErrorMessage();
    return (
      <div>
        <MaskedInput
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          mask={currencyMask}
          className={cx('ux-input', className)}
          placeholder="0"
          value={this.props.getValue() || ''}
          onChange={this.changeValue}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
}
export default withFormsy(CurrencyInput);
