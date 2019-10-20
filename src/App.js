import React, { PureComponent } from 'react';
import './bootstrap.min.css';
import Header from '../src/components/Header';

class App extends PureComponent {
	state = {};

	render() {
		return (
			<div className="container">
				<Header title="Patient Manager" />
			</div>
		);
	}
}

export default App;
