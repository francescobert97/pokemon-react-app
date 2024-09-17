import { combineReducers } from 'redux';
import boxReducer from './boxReducer/BoxReducer';
import teamReducer from './dataReducer/teamReducer';
import fetchReducer from './fetchReducer/fetchReducer';
import pkmnInformationReducer from './PkmnInformationReducer/PkmnInformationReducer';

const rootReducer = combineReducers({
    fetch: fetchReducer,
    team: teamReducer,
    box: boxReducer,
    pkmnInformation: pkmnInformationReducer
});

export default rootReducer;