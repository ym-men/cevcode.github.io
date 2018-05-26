import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({ onClick, className, text, size, disabled, style, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cx(
        'ux-button',
        `ux-button__size_${size}`,
        `ux-button__style_${style}`,
        className
      )}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['auto', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  text: PropTypes.string,
  style: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  size: 'l',
  text: 'hi',
  style: 'blue',
  type: 'submit',
  disabled: false
};

export default Button;
