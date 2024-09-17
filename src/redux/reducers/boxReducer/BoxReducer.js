
const initialState = {
    box: []
};

function boxReducer(state = initialState, action) {
    switch (action.type) {
       
        case 'ADD_PKMN_TO_BOX':
            console.log('yo trabajo tambien')
            return {
                box: [...state.box, action.payload]
            };
        case 'DELETE_PKMN_FROM_BOX':
            const prevBoxState = [...state.box];
            const toDelete = prevBoxState.find(pkmn => pkmn.uniqueId === action.payload.uniqueId);
           return toDelete? {...state ,box:prevBoxState.filter(pkmn => pkmn.uniqueId !== toDelete.uniqueId)} : state;
          
        default:
            return state;
    }
}

export default boxReducer;