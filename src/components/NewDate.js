import React, { Component } from 'react';

class NewDate extends Component {
	state = {};

	render() {
		return (
			<div className="card mt-5 py-5">
				<div className="card-body">
					<h2 className="card-title text-center mb-5">Fill the form to create a new date!</h2>
					<form>
						{/*PET NAME */}
						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">Pet's name</label>
							<div className="col-sm-8 col-lg-10">
								<input type="text" className="form-control" placeholder="Pet's name" name="pet" />
							</div>
						</div>
						{/*OWNER NAME */}
						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">Owner's name</label>
							<div className="col-sm-8 col-lg-10">
								<input type="text" className="form-control" placeholder="Owner's name" name="owner" />
							</div>
						</div>
						{/*DATE AND TIME*/}
						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">Date</label>
							<div className="col-sm-8 col-lg-4">
								<input type="date" className="form-control" name="date" />
							</div>
							<label className="col-sm-4 col-lg-2 col-form-label">Time</label>
							<div className="col-sm-8 col-lg-4">
								<input type="time" className="form-control" name="hour" />
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

export default NewDate;
