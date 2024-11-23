import React from "react";
import { Link } from "react-router-dom";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn/useMemoizePkmn";
import capitalizeString from "../../utils/capitalizeString/capitalizeString";
import pokemonWindow from '../../assets/template/pokemon-window.webp'


const PkmnCard = ({pkmn, reference, iterationIndex, children}) => {
    const memoizingPkmn = useMemoizePkmn();
    const setPokemonInformationPathData = () => {
        localStorage.setItem('currentReference', reference)
        memoizingPkmn({type:'memoize',pkmn})
    }
return (
    <div className="position-relative overflow-hidden rounded ">
        <img src={pokemonWindow} className="h-100 w-100" alt="single-pkmn-window"/>
        <div className="position-absolute d-flex flex-column" style={{top: '50%',left: '50%',  transform: 'translate(-50%, -50%)'}}>
            <Link className="  text-decoration-none text-dark"  to={`/information/${pkmn.id}`} onClick={setPokemonInformationPathData}>
                                    <h4 className="text-center">{capitalizeString(pkmn.name)}</h4>
                                    {
                                        iterationIndex < 7? <img src={pkmn.sprites.front_default} alt="pokemon sprite"/> : <img src={pkmn.sprites.front_default} loading="lazy" alt="pokemon sprite"/>
                                    }         
            </Link>
            {children}
        </div>
      

      
    </div>
 
)
}

export default PkmnCard;