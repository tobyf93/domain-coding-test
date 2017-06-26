import React from 'react';
import styles from '../assets/stylesheets/button.scss';

function Button({ label, backgroundColour }) {
  const className = [styles.root];

  if (backgroundColour === 'summerSky') className.push(styles.summerSky);
  else if (backgroundColour === 'bermudaGrey') className.push(styles.bermudaGrey);

  return (
    <div className={className.join(' ')}>
      {label}
    </div>
  );
}

export default Button;
