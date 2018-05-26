import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ currency, amount, className }) => {
  return <p className={cx('price', className)}>{currency + ' ' + amount}</p>;
};

Price.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.number,
  className: PropTypes.string
};

Price.defaultProps = {
  currency: '',
  amount: '--'
};

export default Price;
