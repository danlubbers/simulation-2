// import Wizard3 from "../Component/Wizard/Wizard3";

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
const UPDATE_STATE = 'UPDATE_STATE';
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

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImg(img) {
    return {
        type: UPDATE_NAME,
        payload: img
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}



// const WIZARD1 = 'WIZARD1';
// const WIZARD2 = 'WIZARD2';
// const WIZARD3 = 'WIZARD3';

// export function wizard1(name, address, city, state, zip) {
//     return {
//         type: WIZARD1,
//         payload: {name, address, city, state, zip}
//     }
// }

// export function wizard2(img) {
//     return {
//         type: WIZARD2,
//         payload: {img}
//     }
// }

// export function wizard3(mortgage, rent) {
//     return {
//         type: Wizard3,
//         payload: {mortgage, rent}
//     }
// }

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return Object.assign( {}, state, {name: action.payload});
        case UPDATE_ADDRESS:
            return Object.assign( {}, state, {address: action.payload});
        case UPDATE_CITY:
            return Object.assign( {}, state, {city: action.payload});
        case UPDATE_STATE:
            return Object.assign( {}, state, {state: action.payload});
        case UPDATE_ZIP:
            return Object.assign( {}, state, {zip: action.payload});
        case UPDATE_IMG:
            return Object.assign( {}, state, {img: action.payload});
        case UPDATE_MORTGAGE:
            return Object.assign( {}, state, {mortgage: action.payload});
        case UPDATE_RENT:
            return Object.assign( {}, state, {rent: action.payload});

        // case WIZARD1:
        //     return Object.assign( {}, state, {name, address, city, state, zip: action.payload});
        
        // case WIZARD2:
        //     return Object.assign( {}, state, {img: action.payload});

        // case WIZARD3:
        //     return Object.assign( {}, state, {mortgage, rent: action.payload});
        
        
            
        default: return state;
    }
}

export default reducer;