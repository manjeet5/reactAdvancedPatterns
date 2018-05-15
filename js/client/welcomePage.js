import React from 'react';
import { connect } from 'react-redux';
import store from '../store/store';
import ErrorBoundary from './errorBoundary';
import TestContent from './testContent';

const mapStateToProps = () => ({ testData: store.init });


const WelcomePage = () => (
  <ErrorBoundary>
    <TestContent testData={this.props.testData} />
  </ErrorBoundary>);

export default connect(mapStateToProps)(WelcomePage);
