const INITIAL_STATE = {
    currentLocation: {
        locationID: null,
        locationName:'No Location',
        menu: null
    }
};

const locationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_LOCTION':
            return {
                ...state,
                currentLocation: action.payload
            }
        default: return state
    }
}

export default locationReducer;