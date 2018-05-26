import React from 'react';
import cx from 'classnames';
import { withFormsy } from 'formsy-react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const { size, placeholder, className, name } = this.props;
    const errorMessage = this.props.getErrorMessage();
    return (
      <div className={cx(`ux-input__size_${size}`, className)}>
        <input
          type="text"
          onChange={this.changeValue}
          name={name}
          className="ux-input"
          value={this.props.getValue() || ''}
          placeholder={placeholder}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  size: PropTypes.oneOf(['auto', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string
};

Input.defaultProps = {
  size: 'l',
  placeholder: 'description',
  className: '',
  name: ''
};

export default withFormsy(Input);
