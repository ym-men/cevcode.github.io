import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Input = ({ value, size, placeholder, className }) => {
  return (
    <input
      type="text"
      className={cx('ux-input', `ux-input__size_${size}`, className)}
      value={value}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  size: PropTypes.oneOf(['auto', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  placeholder: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  size: 'l',
  placeholder: 'description',
  className: ''
};

export default Input;
