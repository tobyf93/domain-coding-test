import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Builder() {
  return <div>BUILDER</div>;
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(state => state, mapDispatchToProps)(Builder);
