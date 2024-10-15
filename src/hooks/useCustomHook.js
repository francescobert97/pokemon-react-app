import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux";

export const useHasUnmounted = (effect,type ) => {
    const hasUnmounted = useRef(false);
    const dispatch = useDispatch()
    
    const environment = process.env.NODE_ENV;
    useEffect(() => {
        if(environment === 'development' && hasUnmounted.current &&  effect.isEnabledInMounting)type === 'dispatch'? dispatch(effect) : effect.fn(...effect.params);
        if(environment === 'production' && effect.isEnabledInMounting)type === 'dispatch'? dispatch(effect) : effect.fn(...effect.params);
        
        return () =>{
            if(environment === 'development') {
                if(hasUnmounted.current) type === 'dispatch'? dispatch(effect()) : effect.fn();
                hasUnmounted.current = true;
            } 
            
            if(environment === 'production') type === 'dispatch'? dispatch(effect()) : effect.fn();
           
        } 
    },[]);

    return hasUnmounted.current;
}