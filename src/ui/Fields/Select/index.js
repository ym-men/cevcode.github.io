import React from 'react';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';

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

    return (
      <ReactSelect
        name="form-field-name"
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
export default Select;
