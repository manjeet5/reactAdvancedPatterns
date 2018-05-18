import React from 'react';
import Switch from './switch';

class Toggle extends React.Component{
	state = {on:false}
	onToggle = () => {
		this.setState({on:!this.state.on}, ()=>{
			console.log(`toggle is ${this.state.on}`)
		});

	}
	render(){
		const {on} = this.state;
		return <Switch on={on} toggle={this.onToggle} />
	}

}

export default Toggle;
