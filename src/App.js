import React, { PureComponent } from 'react';
import './bootstrap.min.css';
import Header from '../src/components/Header';
import NewDate from '../src/components/NewDate';

class App extends PureComponent {
	state = {};

	render() {
		return (
			<div className="container">
				<Header title="Patient Manager" />
				<div className="row">
					<div className="col-md-10 mx-auto">
						<NewDate />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
