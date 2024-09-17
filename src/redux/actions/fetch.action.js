export const fetchRequest = () => {
    return { type:'FETCH_DATA_REQUEST', error: null };
}
export const fetchSuccess = (response) => {
    return { type:'FETCH_DATA_SUCCESS', payload: response };
}

export const fetchFailure = (error) => {
    return { type:'FETCH_DATA_FAILURE',  payload: error };
}