import React, { PureComponent } from 'react';
import './bootstrap.min.css';
import Header from '../src/components/Header';
import NewAppointment from './components/NewAppointment';

class App extends PureComponent {
	state = {
    appointmentCollector: []
  };

	createNewAppointment = data => {
    //copiar el state actual
    const appointmentCollector = [...this.state.appointmentCollector, data]
    
    //agregar el nuevo state
    this.setState({appointmentCollector});
	};

	render() {
		return (
			<div className="container">
				<Header title="Patient Manager" />
				<div className="row">
					<div className="col-md-10 mx-auto">
						<NewAppointment createNewAppointment={this.createNewAppointment} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
