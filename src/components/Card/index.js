import React from 'react';
import styles from '../../assets/stylesheets/card.scss';
import Row from './Row';

function Card({ data }) {
  const fullName = () => {
    const givenName = data.get('givenName') || '';
    const surname = data.get('surname') || '';

    return `${givenName} ${surname}`;
  };

  const addressLine1 = () => {
    const houseNumber = data.get('houseNumber') || '';
    const street = data.get('street') || '';

    return `${houseNumber} ${street}`;
  };

  const addressLine2 = () => {
    const suburb = data.get('suburb') || '';
    const state = data.get('state') || '';

    return `${suburb}, ${state}`;
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.name}>
          {fullName()}
        </div>
        <div className={styles.avatar} />
      </div>
      <div className={styles.body}>
        <Row label="Email" value={data.get('email')} />
        <Row label="Phone" value={data.get('phone')} />
        <Row
          label="Address"
          value={addressLine1()}
        />
        <Row value={addressLine2()} />
        <div className={styles.doubleRow}>
          <Row label="Postcode" value={data.get('postcode')} />
          <Row label="Country" value={data.get('country')} />
        </div>
      </div>
    </div>
  );
}

export default Card;
