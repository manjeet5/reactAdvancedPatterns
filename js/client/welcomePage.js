import React from 'react';
import { connect } from 'react-redux';
import store from '../store/store';
import ErrorBoundary from './errorBoundary';
import TestContent from './testContent';
import Toggle from './toggle';

const mapStateToProps = () => ({ testData: store.init });


const WelcomePage = ({testData}) => (
  <ErrorBoundary>
    <TestContent testData={testData} />
    <Toggle  />
  </ErrorBoundary>);

export default connect(mapStateToProps)(WelcomePage);
