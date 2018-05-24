import React from 'react';
import { Column, Row } from 'ui/Layout';
import Select from 'ui/Fields/Select';
import Formsy from 'formsy-react';
import CurrencyInput from 'ui/Fields/CurrencyInput';
import Input from 'ui/Fields/Input';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import Button from 'ui/Button';

const statuses = [
  { expence: 'Expence', label: 'Expence' },
  { income: 'Income', label: 'Income' }
];
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
    this.formRef = form => (this.form = form);
    this.onSubmit = this.onSubmit.bind(this);
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  onSubmit() {
    const model = this.form.getModel();
    const { firebase } = this.props;
    firebase.push('operations', model);
  }

  render() {
    const { firebase } = this.props;
    return (
      <Formsy
        onValidSubmit={this.submit}
        ref={this.formRef}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        <Row className="form" ai="flex-start">
          <Select name="status" options={statuses} />
          <Select
            name="currencySelect"
            size="s"
            options={this.props.currency}
          />
          <CurrencyInput
            name="currency"
            validations="isExisty"
            validationError="This field is empty"
            required
          />
          <Input
            name="description"
            className="form__description"
            validations="isExisty"
            validationError="This field is empty"
            required
          />
          <Button
            text="add"
            disabled={!this.state.canSubmit}
            onClick={this.onSubmit}
          />
        </Row>
      </Formsy>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.currency
});

export default withFirebase(connect(mapStateToProps)(Form));
