import React from "react";
import { Link } from "react-router-dom";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn";
import capitalizeString from "../../utils/capitalizeString";


const PkmnCard = ({pkmn, reference, iterationIndex}) => {
    const memoizingPkmn = useMemoizePkmn();

return (
    <div className="bg-light p-3">
        <Link className="text-decoration-none text-dark"  to={`/information/${pkmn.id}`} state={reference}  onClick={() => memoizingPkmn({type:'memoize',pkmn})}>
                                <h4 className="text-center">{capitalizeString(pkmn.name)}</h4>
                                {
                                    iterationIndex < 7? <img src={pkmn.sprites.front_default} alt="pokemon sprite"/> : <img src={pkmn.sprites.front_default} loading="lazy" alt="pokemon sprite"/>


                                }
        </Link>
    </div>
)
}

export default PkmnCard;