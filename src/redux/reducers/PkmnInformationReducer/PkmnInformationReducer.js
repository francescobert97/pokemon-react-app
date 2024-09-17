const initialState = {
    pkmnInformation: {}
};


const pkmnInformationReducer = (state = initialState,action) => {


    switch(action.type) {

        case 'MEMOIZE_PKMN_INFORMATION':
            return {...state, pkmnInformation: action.payload};
        case 'DELETE_MEMOIZED_PKMN_INFORMATION':
            return {...state, pkmnInformation: {}}
        default:
             return state
    }
}

export default pkmnInformationReducer;