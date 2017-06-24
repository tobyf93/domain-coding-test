import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../components/Card';
import styles from '../assets/stylesheets/preview.scss';

function Preview() {
  return (
    <div className={styles.root}>
      <Card />
    </div>
  );
}

export default connect(state => state)(Preview);
