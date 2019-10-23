import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';

const ListOfAppointment = ({ appointments, deleteAppointment }) => {
	//Imprimir un mensaje en base a si hay citas o no
	const message =
		Object.keys(appointments).length === 0 ? `There's not appointments` : 'Manage your appointments here!';

	return (
		<div className="card mt-2 py-5">
			<div className="card-body">
				<h1 className="card-title text-center">{message}</h1>

				<div className="list-appointments">
					{appointments.map(appointment => (
						<Appointment
							key={appointment.id}
							appointment={appointment}
							deleteAppointment={deleteAppointment}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

ListOfAppointment.propTypes = {
	appointments: PropTypes.array.isRequired,
	deleteAppointment: PropTypes.func.isRequired,
};

export default ListOfAppointment;
