import React from 'react';
import styles from '../assets/stylesheets/card.scss';

function Card() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.name}>
          <div>Toby Flemming</div>
        </div>
        <div className={styles.avatar} />
      </div>
      <div className={styles.body}>

      </div>
    </div>
  );
}

export default Card;
