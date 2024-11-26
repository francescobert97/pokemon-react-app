import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomBtn from "../../../../components/custom-btn/CustomBtn";
import CustomModal from "../../../../components/custom-modal/CustomModal";
import { useStoringPkmn } from "../../../../hooks/useStoringPkmn/useStoringPkmn";
import styles from './SmTeamChangeBox.module.css'
const SmTeamChangeBox=({method,isVisible, modalStateFn}) => {
    const teamPkmn = useSelector(state => state.team.team)

    const [showModal, updateShowModal] = useState(false);
    const storingPkmn = useStoringPkmn()


    const executeMultipleStoringOperation = (pkmn) => {
        
        const operationsParameters = ['team-to-box', 'box-to-team']
        storingPkmn({type:operationsParameters[0],pkmn});
        storingPkmn({type:operationsParameters[1],pkmn: isVisible});
    }

    const test = (pkmn) => {
       if(!showModal) executeMultipleStoringOperation(pkmn)

        updateShowModal(true)
        modalStateFn((state) => ({...state, modalState: {pkmnId: null, modalId: null, disableOtherBtns: false, message: ''}}))
    }

    const setEverithingOff = () =>{
        method(state => ({...state, isPokemonChoosingVisible:{}}))

        updateShowModal(false)
    }
    return (<>
        {(isVisible.uniqueId) && <div id={styles.SmTeamChangeBox} className="w-100 d-flex gap-2 justify-content-center cm-window p-5 position-fixed top-0 text-light">
                    
                {teamPkmn.map(pkmn => 
                    <div key={pkmn.uniqueId} className="d-flex flex-column align-items-center" onClick={() => test(pkmn)}>
                        <img src={pkmn?.sprites?.front_default} alt="pokemon sprite."/>
                    </div>
                )}
                {showModal &&
                    <CustomModal classes={'cm-window p-5'} message={'successfully team updated!'}>
                        <CustomBtn  funzione={setEverithingOff} label="Close" />
                    </CustomModal>
                }
    </div>}
    </>)
}

export default SmTeamChangeBox;