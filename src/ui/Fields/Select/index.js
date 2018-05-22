import React from 'react';
import ReactSelect from 'react-select';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Select extends React.Component {
  state = {
    selectedOption: ''
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };
  render() {
    const { selectedOption } = this.state;
    const { size, placeholder, searchable } = this.props;

    return (
      <ReactSelect
        className={cx('select', `select__size_${size}`)}
        name="form-field-name"
        placeholder={placeholder}
        searchable={searchable}
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' }
        ]}
      />
    );
  }
}

Select.propTypes = {
  searchable: PropTypes.bool,
  size: PropTypes.oneOf(['auto', 'xs', 's', 'm', 'l', 'xl', 'xxl'])
};

Select.defaultProps = {
  size: 'l',
  searchable: false,
  placeholder: 'Choose something'
};
export default Select;
