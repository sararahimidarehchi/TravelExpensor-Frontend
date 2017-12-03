import React from 'react';
import PropTypes from 'prop-types';
import { createNewTrip, setNewTripCurrency, setNewTripName, setNewTripParticipants } from './../actions/newTrip';
import './createNewPage.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const CreateNewPage = ({ setNewTripName, setNewTripParticipants, setNewTripCurrency, createNewTrip}) => {

	const changeText = (fn) => (evt) => {
		const text = evt.target.value;
		fn(text);
	};
	return (
			<form id="contact">
				<div class="container">
					<div class="head">
						<h2>Create new travel</h2>
					</div>
					<input type="text" placeholder="Name" onChange={changeText(setNewTripName)}/>
					<input  type="text" placeholder="Participants" onChange={changeText(setNewTripParticipants)}/>
					<input type="text" placeholder="Currency" onChange={changeText(setNewTripCurrency)}/>
					<button type="submit" onClick={() => createNewTrip()}>
						Create
					</button>
				</div>
			</form>
	);
};

CreateNewPage.propTypes = {
	setNewTripName: PropTypes.func,
	setNewTripParticipants: PropTypes.func,
	setNewTripCurrency: PropTypes.func,
	createNewTrip: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ setNewTripName, setNewTripParticipants, setNewTripCurrency, createNewTrip}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPage);
