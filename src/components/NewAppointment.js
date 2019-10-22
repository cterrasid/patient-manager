import React, { Component } from 'react';
import uuid from 'uuid';

const initialState = {
	appointment: {
		pet: '',
		owner: '',
		date: '',
		time: '',
		symptoms: '',
	},
	error: false,
};

class NewAppointment extends Component {
	state = { ...initialState };

	//Cuando el usuario escribe en los inputs
	handleChange = e => {
		this.setState({
			appointment: {
				//se toma una copia del state para que no se pierda lo que tenía antes
				...this.state.appointment,
				[e.target.name]: e.target.value,
			},
		});
	};

	//Cuando el usuario envía el formulario
	handleSubmit = e => {
		//Prevengo el comportamiento del boton
		e.preventDefault();

		//extraer los valores del state
		const { pet, owner, time, date, symptoms } = this.state.appointment;

		//validar que todos los campos esten llenos
		if (pet === '' || owner === '' || date === '' || time === '' || symptoms === '') {
			this.setState({
				error: true,
			});
			//detener la ejecución
			return;
		}

		//generar objeto con los datos (cita con id incluído)
		const newAppointment = { ...this.state.appointment };
		newAppointment.id = uuid();

		//agregar la cita al state principal (App)
		this.props.createNewAppointment(newAppointment);

		//colocar en el state, initialState
		this.setState({ ...initialState });
	};

	render() {
		const { error } = this.state;

		return (
			<div className="card mt-5 py-5">
				<div className="card-body">
					<h2 className="card-title text-center mb-5">Fill the form to create a new date!</h2>
					{error ? (
						<div className="alert alert-danger mt-2 mb-5 text-center">All the fields are mantatory</div>
					) : (
						''
					)}
					<form onSubmit={this.handleSubmit}>
						{/*PET NAME */}
						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">Pet's name</label>
							<div className="col-sm-8 col-lg-10">
								<input
									type="text"
									className="form-control"
									placeholder="Pet's name"
									name="pet"
									onChange={this.handleChange}
									value={this.state.appointment.pet}
								/>
							</div>
						</div>
						{/*OWNER NAME */}
						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">Owner's name</label>
							<div className="col-sm-8 col-lg-10">
								<input
									type="text"
									className="form-control"
									placeholder="Owner's name"
									name="owner"
									onChange={this.handleChange}
									value={this.state.appointment.owner}
								/>
							</div>
						</div>
						{/*DATE AND TIME*/}
						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">Date</label>
							<div className="col-sm-8 col-lg-4">
								<input
									type="date"
									className="form-control"
									name="date"
									onChange={this.handleChange}
									value={this.state.appointment.date}
								/>
							</div>
							<label className="col-sm-4 col-lg-2 col-form-label">Time</label>
							<div className="col-sm-8 col-lg-4">
								<input
									type="time"
									className="form-control"
									name="time"
									onChange={this.handleChange}
									value={this.state.appointment.time}
								/>
							</div>
						</div>
						{/*SYMPTOM*/}
						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
							<div className="col-sm-8 col-lg-10">
								<textarea
									className="form-control"
									name="symptoms"
									placeholder="Describe the symptoms"
									onChange={this.handleChange}
									value={this.state.appointment.symptoms}
								></textarea>
							</div>
						</div>
						<input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Add new date" />
					</form>
				</div>
			</div>
		);
	}
}

export default NewAppointment;
