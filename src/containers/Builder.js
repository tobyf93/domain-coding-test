import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/Form';
import { updateField } from '../redux/actions';

function Builder({ updateField }) {
  return (
    <div>
      <Form updateField={updateField} />
    </div>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateField }, dispatch);

export default connect(state => state, mapDispatchToProps)(Builder);
