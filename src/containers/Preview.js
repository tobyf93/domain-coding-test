import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../components/Card';
import styles from '../assets/stylesheets/preview.scss';

function Preview({ data }) {
  return (
    <div className={styles.root}>
      <Card data={data} />
    </div>
  );
}

export default connect(state => state)(Preview);
