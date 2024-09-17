export const addPkmnToTeam = (pkmn) => {
    console.log(pkmn)
    return {type: 'ADD_PKMN_TO_TEAM', payload: pkmn}
}

export const addPkmnToBox = (pkmn) => {
    console.log(pkmn)
    return {type: 'ADD_PKMN_TO_BOX', payload: pkmn}
}


export const deletePkmnFromTeam = (pkmn) => {
    console.log(pkmn)
    return {type: 'DELETE_PKMN_FROM_TEAM', payload: pkmn}
}

export const DeletePkmnFromBox = (pkmn) => {
    console.log(pkmn)
    return {type: 'DELETE_PKMN_FROM_BOX', payload: pkmn}
}

export const memoizePkmnInformation = (pkmn) => {
    console.log(pkmn)
    console.log('lesgoski')
    return {type: 'MEMOIZE_PKMN_INFORMATION', payload: pkmn}
}

export const deleteMemoizedPkmnInformation = () => {
    console.log('parto!!!')
    return {type: 'DELETE_MEMOIZED_PKMN_INFORMATION'};

}