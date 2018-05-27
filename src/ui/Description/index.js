import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ children, heading, className }) => {
  return (
    <p
      className={cx(
        'ui-description',
        heading && 'ui-description_heading',
        className
      )}
    >
      {children}
    </p>
  );
};

export default Description;
