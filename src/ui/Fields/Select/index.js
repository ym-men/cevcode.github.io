import React from 'react';
import ReactSelect from 'react-select';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(value) {
    this.props.setValue(value);
  }

  render() {
    const { size, placeholder, searchable, name, options } = this.props;
    const errorMessage = this.props.getErrorMessage();

    return (
      <div>
        <ReactSelect
          className={cx('select', `select__size_${size}`)}
          name={name}
          placeholder={placeholder}
          searchable={searchable}
          value={this.props.getValue()}
          onChange={this.changeValue}
          options={options}
        />
        <span className="error-message">{errorMessage}</span>
      </div>
    );
  }
}

Select.propTypes = {
  searchable: PropTypes.bool,
  size: PropTypes.oneOf(['auto', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  name: PropTypes.string,
  options: PropTypes.array
};

Select.defaultProps = {
  size: 'l',
  searchable: false,
  name: '',
  placeholder: 'Choose something',
  options: []
};
export default withFormsy(Select);
