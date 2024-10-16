import React from "react";
import { Link } from "react-router-dom";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn";
import capitalizeString from "../../utils/capitalizeString";


const PkmnCard = ({pkmn, reference, iterationIndex}) => {
    const memoizingPkmn = useMemoizePkmn();
    const setPokemonInformationPathData = () => {
        localStorage.setItem('currentReference', reference)
        memoizingPkmn({type:'memoize',pkmn})
    }
return (
    <div className="bg-light p-3">
        <Link className="text-decoration-none text-dark"  to={`/information/${pkmn.id}`}  onClick={setPokemonInformationPathData}>
                                <h4 className="text-center">{capitalizeString(pkmn.name)}</h4>
                                {
                                    iterationIndex < 7? <img src={pkmn.sprites.front_default} alt="pokemon sprite"/> : <img src={pkmn.sprites.front_default} loading="lazy" alt="pokemon sprite"/>
                                }
        </Link>
    </div>
)
}

export default PkmnCard;