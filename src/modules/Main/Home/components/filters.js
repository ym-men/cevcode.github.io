import React from 'react';
import { Column, Row } from 'ui/Layout';
import Formsy from 'formsy-react';
import Description from 'ui/Description';
import Select from 'ui/Fields/Select';
import CurrencyInput from 'ui/Fields/CurrencyInput';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      canSubmit: false
    };
    this.formRef = form => (this.form = form);
    this.onSubmit = this.onSubmit.bind(this);
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  async onSubmit(event) {
    event.preventDefault();
    const model = this.form.getModel();
    const { firebase } = this.props;
    const result = await firebase.push('operations', model);
  }

  render() {
    return (
      <Formsy
        onValidSubmit={this.submit}
        ref={this.formRef}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        <Row className="filters" ai="center" jc="flex-end">
          <Select size="s" placeholder="$" name="pickedCurrency" />
          <Description>€ => $</Description>
          <CurrencyInput name="coefficient" />
        </Row>
      </Formsy>
    );
  }
}

export default Filters;
