const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}


function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return Object.assign( {}, state, {name: action.payload});
            
        default: return state;
    }
}

export default reducer;