import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux";

export const useHasUnmounted = (effect, ) => {
    const hasUnmounted = useRef(false);
    const dispatch = useDispatch()

    useEffect(() => {

        return () =>{
            if(hasUnmounted.current) {
                dispatch(effect())
             
            }
            hasUnmounted.current = true;
        } 
    },[]);

    return hasUnmounted.current;
}