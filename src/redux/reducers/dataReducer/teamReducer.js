
const initialState = {
    team: [],
};

function teamReducer(state = initialState, action) {
    console.log('triggered')
    switch (action.type) {
       
        case 'ADD_PKMN_TO_TEAM':
            console.log('aca estamos')
            if(state.team.length === 6) return state
            return {
                ...state,
                team: [...state.team, action.payload]
            };
        case 'DELETE_PKMN_FROM_TEAM':
                const prevTeamState = [...state.team]
               const toDelete = prevTeamState.find(pkmn => pkmn.uniqueId === action.payload.uniqueId)
               return toDelete? {...state, team: prevTeamState.filter(pkmn => pkmn.uniqueId !== toDelete.uniqueId)} : state;
 
        default:
            return state;
    }
}

export default teamReducer;