import React from 'react';
import styles from '../../assets/stylesheets/formHeader.scss';

function Header({ label }) {
  return (
    <div className={styles.root}>
      {label}
    </div>
  );
}

export default Header;
