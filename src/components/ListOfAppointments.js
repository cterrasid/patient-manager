import React from 'react';
import Appointment from './Appointment';

const ListOfAppointment = ({ appointments, deleteAppointment }) => {
	return (
		<div className="card mt-2 py-5">
			<div className="card-body">
				<h1 className="card-title text-center">Manage your appointments here!</h1>

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

export default ListOfAppointment;
