const initialState = {
    data: null,
    loading: false,
    error: null,
};


 const fetchReducer = (state = initialState, action) => {
    console.log('FETCHREDUCER CHIAMA')
    switch(action.type) {
        case 'FETCH_DATA_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_DATA_SUCCESS':
            console.log(action.payload)
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_DATA_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
            
    }
}

export default fetchReducer