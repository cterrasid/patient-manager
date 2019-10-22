import React, { PureComponent } from 'react';
import './bootstrap.min.css';
import Header from '../src/components/Header';
import NewAppointment from './components/NewAppointment';
import ListOfAppointments from './components/ListOfAppointments';

class App extends PureComponent {
	state = {
		appointmentCollector: [],
	};

	createNewAppointment = data => {
		//copiar el state actual
		const appointmentCollector = [...this.state.appointmentCollector, data];

		//agregar el nuevo state
		this.setState({ appointmentCollector });
	};

	render() {
		return (
			<div className="container">
				<Header title="Patient Manager" />
				<div className="row">
					<div className="col-md-10 mx-auto">
						<NewAppointment createNewAppointment={this.createNewAppointment} />
					</div>
					<div className="mt-5 col-md-10 mx-auto">
						<ListOfAppointments appointments={this.state.appointmentCollector} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
