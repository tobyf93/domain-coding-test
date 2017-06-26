import React from 'react';
import Header from './Header';
import Input from './Input';
import Button from '../Button';
import styles from '../../assets/stylesheets/form.scss';

function Form({ updateField }) {
  const onChange = (field, e) => {
    updateField(field, e.target.value.trim());
  };

  return (
    <div className={styles.root}>
      <Header label="Personal Details" />
      <Input
        label="Given Name"
        onChange={e => onChange('givenName', e)}
      />
      <Input
        label="Surname"
        onChange={e => onChange('surname', e)}
      />
      <Input
        label="Email"
        onChange={e => onChange('email', e)}
      />
      <Input
        label="Phone"
        onChange={e => onChange('phone', e)}
      />
      <Header label="Address" />
      <Input
        label="House Name or #"
        onChange={e => onChange('houseNumber', e)}
      />
      <Input
        label="Street"
        onChange={e => onChange('street', e)}
      />
      <Input
        label="Suburb"
        onChange={e => onChange('suburb', e)}
      />
      <Input
        label="State"
        onChange={e => onChange('state', e)}
      />
      <Input
        label="Postcode"
        onChange={e => onChange('postcode', e)}
      />
      <Input
        label="Country"
        onChange={e => onChange('country', e)}
      />
      <Button
        label="Upload Avatar"
        backgroundColour="bermudaGrey"
      />
      <Button
        label="Create hCard"
        backgroundColour="summerSky"
      />
    </div>
  );
}

export default Form;
