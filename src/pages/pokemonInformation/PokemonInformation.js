import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useHasUnmounted } from "../../hooks/useCustomHook";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn";
import Abilities from "./components/Abilities";
import PokemonInfoNavbar from "./components/pokemon-info-navbar/PokemonInfoNavbar";
import Sprites from "./components/sprites/Sprites";
import Stats from "./components/Stats";
import Moves from "./components/moves/Moves";


const PokemonInformation = () => {
    const location =  useLocation();
    const memoizePkmn = useMemoizePkmn()
    const pkmn = useSelector(state => state.pkmnInformation.pkmnInformation)
    useHasUnmounted({fn: () => memoizePkmn({type:'delete'})}, 'no-dispatch');

    return (
        <div className="container-fluid text-light vh-100">
            <div className="row">
                <PokemonInfoNavbar reference={location.state}/>
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <Routes>
                        <Route path="/" element={<Navigate to={"abilities"} replace />} />
                        <Route path="/abilities" element={<Abilities abilities={pkmn.abilities}/>} key='abilities' />
                        <Route path="stats" element={<Stats stats={pkmn.stats}/>} key='stats' />
                        <Route path="moves" element={<Moves moves={pkmn.moves} key='moves'/>} />
                        <Route path="sprites" element={<Sprites sprites={pkmn.sprites}/>} key='sprites' />
                    </Routes>
                </div>
            </div>
    


        </div>
    
    )
}


export default PokemonInformation;