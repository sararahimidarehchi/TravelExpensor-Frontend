import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchTest} from './../actions/initialise';
import { setNewEntryTitle,
		setNewEntryPaidBy,
		setNewEntryCost,
		setNewEntryParticipants,
		setNewEntryCurrency,
		addNewEntry } from './../actions/newEntry';
import './tripDetailsPage.css';
import _ from 'lodash';

const changeText = (fn) => (evt) => {
	const text = evt.target.value;
	fn(text);
};
const getTripIdFromLocation = (url, item) => _.last(window.location.href.split('/'));
class TripDetailsPage extends Component {
	//componentDidMount() {
	//	this.props.fetchTest();
	//} // TODO: needed after create new trip to update state

	constructor(props) {
		super(props);

		this.state = {
			showAddNew: false
		};

		this.toggleAddNew = () => {
			this.setState({
				showAddNew: !this.state.showAddNew
			});
		};

		this.addNewEntry = () => {
			this.toggleAddNew();
			//this.props.addNewEntry(); // TODO
		}
	}

	render() {
		const participantsArray = this.props.trip ? _.map(this.props.trip.participants, _.property('name')) : [];
		const participantsNames = participantsArray.join(', ');
		return (
				<div className="trip-details">
					<div className="fields trip-name">
						Name: {this.props.trip ? this.props.trip.name : ''}
					</div>
					<div className="fields trip-date">
						Date: {this.props.trip ? this.props.trip.date : ''}
					</div>
					<div className="fields trip-participants">
						Participants: {participantsNames}
					</div>
					<div className="fields trip-entries">
						<h3>Entries</h3>
						<table></table>
					</div>
					{!this.state.showAddNew ? <div className="trip-add-new-entry">
						<button onClick={this.toggleAddNew}>Add new entry</button>
					</div> : null}
					{this.state.showAddNew ? <div className="new-entry">
						<form>
							<div>
								<div>
									<label for="title">Title</label>
									<input type="text" name="title" placeholder="Title"
										   onChange={changeText(this.props.setNewEntryTitle)}/>
								</div>
								<div>
									<label for="paidBy">Paid by</label>
									<input type="text" name="paidBy" placeholder="Paid by"
										   onChange={changeText(this.props.setNewEntryPaidBy)}/>
								</div>
								<div>
									<label for="cost">Cost</label>
									<input type="text" name="cost" placeholder="Cost"
										   onChange={changeText(this.props.setNewEntryCost)}/>
								</div>
								<div>
									<label for="participants">Participants</label>
									<input type="text" name="participants" placeholder="Participants"
										   onChange={changeText(this.props.setNewEntryParticipants)}/>
								</div>
								<div>
									<label for="currency">Currency</label>
									<input type="text" name="currency" placeholder="Currency"
										   onChange={changeText(this.props.setNewEntryCurrency)}/>
								</div>
								<button type="submit" onClick={this.addNewEntry}>
									Add
								</button>
							</div>
						</form>
					</div> : null}
					<div className="fields trip-summary">
						<h3>Summary</h3>
						<table></table>
					</div>

				</div>
		);
	}
}

TripDetailsPage.propTypes = {
	setNewEntryTitle: PropTypes.func,
	setNewEntryPaidBy: PropTypes.func,
	setNewEntryCost: PropTypes.func,
	setNewEntryParticipants: PropTypes.func,
	setNewEntryCurrency: PropTypes.func,
	addNewEntry: PropTypes.func
};

export const mapStateToProps = state => ({
		trip: _.find(state.trips, trip => trip.id = getTripIdFromLocation())
	});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchTest,
	setNewEntryTitle,
	setNewEntryPaidBy,
	setNewEntryCost,
	setNewEntryParticipants,
	setNewEntryCurrency,
	addNewEntry
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
