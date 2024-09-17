import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useHasUnmounted } from "../../hooks/useCustomHook";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn";
import { deleteMemoizedPkmnInformation } from "../../redux/actions/addPkmn.action";
import Abilities from "./components/Abilities";
import PokemonInfoNavbar from "./components/pokemon-info-navbar/PokemonInfoNavbar";
import Sprites from "./components/sprites/Sprites";
import Stats from "./components/Stats";
import Moves from "./moves/Moves";


const PokemonInformation = () => {
    const location =  useLocation();
    const pkmn = useSelector(state => state.pkmnInformation.pkmnInformation)
    const dispatch = useDispatch()
    //const memoizePkmn = useMemoizePkmn()
    const hasUnmounted = useHasUnmounted(deleteMemoizedPkmnInformation);

    useEffect(() => {
    return () => {
        if(process.env.NODE_ENV === 'production') {
            dispatch(deleteMemoizedPkmnInformation())
            //memoizePkmn('delete')

        }        
    }


    }, [])

    return (
        <div className="container-fluid text-light vh-100">
            <div className="row">
                <PokemonInfoNavbar reference={location.state}/>
                <div className="w-100 d-flex justify-content-center align-items-center">

               
                <Routes>
                    <Route path="/" element={<Navigate to={"abilities"} replace />} />
                    <Route path="/abilities" element={<Abilities abilities={pkmn.abilities}/>} />
                    <Route path="stats" element={<Stats stats={pkmn.stats}/>} />
                    <Route path="moves" element={<Moves moves={pkmn.moves}/>} />
                    <Route path="sprites" element={<Sprites sprites={pkmn.sprites}/>} />
                </Routes>
                </div>
            </div>
    


        </div>
    
    )
}


export default PokemonInformation;