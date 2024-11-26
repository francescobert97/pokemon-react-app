import { getAllPokemonNameList } from "../services/pokemon.service";
import { fetchFailure, fetchRequest, fetchSuccess } from "./actions/fetch.action";

export const fetchData = () => async (dispatch) => {

        const rootPersistedData = localStorage.getItem('persist:root');
        let persistedDataResult = null;
    
        if (rootPersistedData) {
          const parsedRootData = JSON.parse(rootPersistedData);
          if (parsedRootData.fetch) {
            persistedDataResult = JSON.parse(parsedRootData.fetch).data?.results;
          }
        }
        
    if(persistedDataResult && Array.isArray(persistedDataResult) && persistedDataResult.length > 0) {
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
