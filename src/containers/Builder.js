import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../components/Input';
import { updateField } from '../redux/actions';

function Builder({ updateField }) {
  const onChange = (field, e) => {
    updateField(field, e.target.value);
  };

  return (
    <div>
      <Input
        placeHolder="Given Name"
        onChange={e => onChange('givenName', e)}
      />
      <Input
        placeHolder="Surname"
        onChange={e => onChange('surname', e)}
      />
      <Input
        placeHolder="Email"
        onChange={e => onChange('email', e)}
      />
      <Input
        placeHolder="Phone"
        onChange={e => onChange('phone', e)}
      />
      <Input
        placeHolder="House Name or #"
        onChange={e => onChange('houseNumber', e)}
      />
      <Input
        placeHolder="Street"
        onChange={e => onChange('street', e)}
      />
      <Input
        placeHolder="Suburb"
        onChange={e => onChange('suburb', e)}
      />
      <Input
        placeHolder="State"
        onChange={e => onChange('state', e)}
      />
      <Input
        placeHolder="Postcode"
        onChange={e => onChange('postcode', e)}
      />
      <Input
        placeHolder="Country"
        onChange={e => onChange('country', e)}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateField }, dispatch);

export default connect(state => state, mapDispatchToProps)(Builder);
