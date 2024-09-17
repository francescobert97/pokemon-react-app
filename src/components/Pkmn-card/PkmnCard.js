import React from "react";
import { Link } from "react-router-dom";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn";
import capitalizeString from "../../utils/capitalizeString";


const PkmnCard = ({pkmn, reference}) => {
    const memoizingPkmn = useMemoizePkmn();

return (
    <div className="bg-light p-3">
        <Link className="text-decoration-none text-dark"  to={`/information/${pkmn.id}`} state={reference}  onClick={() => memoizingPkmn({type:'memoize',pkmn})}>
                                <h4 className="text-center">{capitalizeString(pkmn.name)}</h4>
                                <img src={pkmn.sprites.front_default}/>
        </Link>
    </div>
)
}

export default PkmnCard;