import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Trips from './trips.presentational';

export const mapStateToProps = state => ({
	trips: state.trips
});

export default connect(mapStateToProps)(Trips);
