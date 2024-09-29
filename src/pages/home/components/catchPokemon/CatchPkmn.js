import React, { useState } from "react";
import CustomBtn from "../../../../components/custom-btn/CustomBtn";
import { useStoringPkmn } from "../../../../hooks/useStoringPkmn";
import fieldPoke from '../../../../assets/field-poke.webp'
import { useSelector } from "react-redux";

const CatchPkmn = ({ catchedPokemon ,updateShowCatch}) => {
    const teamStore = useSelector(state => state.team.team);
    const storingPkmn = useStoringPkmn()
    const sendPokemon = (operation) => {
        storingPkmn({type:operation, pkmn:catchedPokemon})
        updateShowCatch(false)
    }



    return (
        <div className="position-absolute w-100 h-100 rounded d-flex flex-column justify-content-center align-items-center" style={{top: '0', right: '0',background:  `url(${fieldPoke})`, backgroundSize: 'cover'}}>
                <p className="fs-4 bg-light rounded p-2 mt-5">Congratulations! you have got <span className="fw-bold fs-3">{catchedPokemon.name}</span></p>
                <img className="h-100 w-100" src={catchedPokemon.sprites.front_default}  style={{maxWidth: '350px', minHeight: '300px'}}/>

                <div className="d-flex gap-2 mb-5">
                    <CustomBtn label={'Send to Team'} classes={''} conditionToDisableBtn={teamStore.length>=6} fn={{fn:sendPokemon, parameters: ['add-to-team']}}/>
                    <CustomBtn label={'Send to Box'} classes={''}  fn={{fn:sendPokemon, parameters: ['add-to-box']}}/>
                </div>
             </div>
    )
}

export default CatchPkmn;