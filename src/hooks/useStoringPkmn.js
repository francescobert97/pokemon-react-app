import { useDispatch, useSelector } from "react-redux";
import { addPkmnToBox, addPkmnToTeam, DeletePkmnFromBox, deletePkmnFromTeam } from "../redux/actions/addPkmn.action";

export const useStoringPkmn = () => {
    const teamPkmns = useSelector(state => state.team.team)
    
    const dispatchAction = useDispatch()
    return (operationObj) => {
    
        switch(operationObj.type) {

            case'add-to-team':
                if(teamPkmns.length === 6) return;
                 dispatchAction(addPkmnToTeam(operationObj.pkmn));
                 break;
            case 'add-to-box': 
                 dispatchAction(addPkmnToBox(operationObj.pkmn));
                 break;
            case 'box-delete':
                 dispatchAction(DeletePkmnFromBox(operationObj.pkmn));
                 break;
            case  'box-to-team': 
                dispatchAction(DeletePkmnFromBox(operationObj.pkmn));
                dispatchAction(addPkmnToTeam(operationObj.pkmn));
                break; 
            case 'team-to-box' :
                dispatchAction(deletePkmnFromTeam(operationObj.pkmn));
                dispatchAction(addPkmnToBox(operationObj.pkmn));
                break; 
            default: return;
        }
    }
}
