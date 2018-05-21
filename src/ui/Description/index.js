import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ children, heading }) => {
    return <p className={cx('ui-description', heading && 'ui-description_heading')}>{children}</p>;
};

export default Description;
