import React from 'react';
import store from '../store/store';
import {connect} from 'react-redux';
import ErrorBoundary from './errorBoundary.js';
import TestContent from './testContent.js';
const mapStateToProps = (store) =>{
	return {testData : store.init}
}


class  WelcomePage extends React.Component{
	render = () => {
		console.log(this.props.testData);
		return <ErrorBoundary>
				<TestContent testData = {this.props.testData} />
			</ErrorBoundary>
		}
}

export default connect(mapStateToProps)(WelcomePage);
