import React, { PureComponent } from 'react';
import './bootstrap.min.css';
import Header from '../src/components/Header';
import NewAppointment from './components/NewAppointment';
import ListOfAppointments from './components/ListOfAppointments';

class App extends PureComponent {
	state = {
		appointments: [],
	};

	//Cuando cargue el componente
	componentDidMount() {
		const appointmentsLS = localStorage.getItem('appointments');
		if (appointmentsLS) {
			this.setState({
				appointments: JSON.parse(appointmentsLS),
			});
		}
	}

	//Cuando se elimina o agrega una cita!
	//Este metodo revisa el state y guarda lo que se agregue o elimine de alli
	componentDidUpdate() {
		localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
	}

	createNewAppointment = data => {
		//copiar el state actual
		const appointments = [...this.state.appointments, data];

		//agregar el nuevo state
		this.setState({ appointments });
	};

	//Eliminar cita de la lista(del state)
	deleteAppointment = id => {
		//Crear una copia del state
		const currentAppointments = [...this.state.appointments];

		//Utilizar filter para sacar el @id del array
		const appointments = currentAppointments.filter(appointment => appointment.id !== id);

		//actualizar el state
		this.setState({ appointments });
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
						<ListOfAppointments
							appointments={this.state.appointments}
							deleteAppointment={this.deleteAppointment}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
