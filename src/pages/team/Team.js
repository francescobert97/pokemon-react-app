import React from "react";
import { useSelector } from "react-redux";
import PokemonsBoxContainer from "../../components/pokemons-box/PokemonsBoxContainer";

const Team = () => {
    const teamPkmns = useSelector(state => state.team.team);
    console.log(useSelector(state => state))
    const pkmnModals = [{operation:'team-to-box', label: 'Move to Box',modalMsg:[ {id: 0 ,message:'would you send it to the box?', hasNextStep: false, condition: null}]}]
    return (
        <PokemonsBoxContainer pkmns={teamPkmns} types={pkmnModals} classes={'d-flex bg-dark text-light gap-4 p-2'} noPkmncustomMessage={'there\'s no pokemon in your team.'} reference="team" />
    )
}

export default Team;

