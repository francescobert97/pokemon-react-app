import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useHasUnmounted } from "../../hooks/useHasUnmounted/useHasUnmounted";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn/useMemoizePkmn";
import Abilities from "./components/abilities/Abilities";
import PokemonInfoNavbar from "./components/pokemon-info-navbar/PokemonInfoNavbar";
import Sprites from "./components/sprites/Sprites";
import Stats from "./components/stats/Stats";
import Moves from "./components/moves/Moves";
import imgBox from '../../assets/pokemon-window.webp'


const PokemonInformation = () => {
    const location =  useLocation();
    const memoizePkmn = useMemoizePkmn()
    const pkmn = useSelector(state => state.pkmnInformation.pkmnInformation)
    useHasUnmounted({fn: () => memoizePkmn({type:'delete'})}, 'no-dispatch');

    return (
      
            <div className="h-100 d-flex flex-column">
                <PokemonInfoNavbar reference={location.state}/>
                <div className="w-100 d-flex justify-content-center align-items-center flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Navigate to={"abilities"} replace />} />
                        <Route path="/abilities" element={<Abilities sectionBg={imgBox} abilities={pkmn.abilities}/>} key='abilities' />
                        <Route path="stats" element={<Stats sectionBg={imgBox} stats={pkmn.stats}/>} key='stats' />
                        <Route path="moves" element={<Moves sectionBg={imgBox} moves={pkmn.moves} key='moves'/>} />
                        <Route path="sprites" element={<Sprites sectionBg={imgBox} sprites={pkmn.sprites}/>} key='sprites' />
                    </Routes>
                </div>
            </div>

    
    )
}


export default PokemonInformation;