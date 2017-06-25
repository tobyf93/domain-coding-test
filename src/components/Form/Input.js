import React from 'react';
import styles from '../../assets/stylesheets/formInput.scss';

function Input({ label, onChange }) {
  return (
    <div className={styles.root}>
      <div className={styles.label}>
        {label}
      </div>
      <input
        type="text"
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
