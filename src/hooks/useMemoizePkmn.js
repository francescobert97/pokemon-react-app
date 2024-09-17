import { useDispatch } from "react-redux"
import { deleteMemoizedPkmnInformation, memoizePkmnInformation } from "../redux/actions/addPkmn.action"



export const useMemoizePkmn = () => {
    const dispatchAction = useDispatch()

    return (operationObj) => {
        if(operationObj.type === 'memoize')dispatchAction(memoizePkmnInformation(operationObj.pkmn))
        if(operationObj.type  === 'delete') dispatchAction(deleteMemoizedPkmnInformation())
        
    }

}