import React from 'react';
import styles from '../../assets/stylesheets/cardRow.scss';

function Row({ label, value }) {
  return (
    <div className={styles.root}>
      <div className={styles.label}>
        {label}
      </div>
      <div>
        {value}
      </div>
    </div>
  );
}

export default Row;
