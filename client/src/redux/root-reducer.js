import { combineReducers } from 'redux';
import locationReducer from './location/location-reducer';


export default combineReducers({
    location: locationReducer
})
