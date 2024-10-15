import { getAllPokemonNameList } from "../services/pokemon.service";
import { fetchFailure, fetchRequest, fetchSuccess } from "./actions/fetch.action";

export const fetchData = () => async (dispatch) => {
    const persistedDataResult =  JSON.parse(JSON.parse(localStorage.getItem('persist:root')).fetch)?.data?.results;
    console.log(persistedDataResult)
    if(persistedDataResult && Array.isArray(persistedDataResult) && persistedDataResult.length > 0) {
        console.log('thunk non scarica più')
        return;
    } 

    dispatch(fetchRequest());

    const response = await getAllPokemonNameList();

    try {
    dispatch(fetchSuccess(response));
    }
    catch(error) {
        dispatch(fetchFailure(error));
    }
}