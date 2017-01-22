'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import NetEasyItemPanel from '../components/NetEasyItemPanel';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

class NetEasyApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <NetEasyItemPanel
          likedList={[]}
          selectList={[]}
        {...actions} />
    );
  }
}

export default connect(
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(NetEasyApp);
