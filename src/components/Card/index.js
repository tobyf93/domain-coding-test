import React from 'react';
import styles from '../../assets/stylesheets/card.scss';
import Row from './Row';

function Card({ data }) {
  const fullName = () => [
    data.get('givenName'),
    data.get('surname'),
  ]
    .filter(item => item)
    .join(' ');

  const getAddressLine1 = () => [
    data.get('houseNumber'),
    data.get('street'),
  ]
    .filter(item => item)
    .join(' ');

  const getAddressLine2 = () => [
    data.get('suburb'),
    data.get('state'),
  ]
    .filter(item => item)
    .join(', ');

  const addressLine2 = getAddressLine2();

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
          value={getAddressLine1()}
        />
        {
          addressLine2 ?
            <Row value={getAddressLine2()} /> : null
        }
        <div className={styles.doubleRow}>
          <Row label="Postcode" value={data.get('postcode')} />
          <Row label="Country" value={data.get('country')} />
        </div>
      </div>
    </div>
  );
}

export default Card;
