import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomBtn from "../../../../components/custom-btn/CustomBtn";
import CustomModal from "../../../../components/custom-modal/CustomModal";
import { useStoringPkmn } from "../../../../hooks/useStoringPkmn";

const SmTeamChangeBox=({method,isVisible, modalStateFn}) => {
    const teamPkmn = useSelector(state => state.team.team)

    const [showModal, updateShowModal] = useState(false);
    const storingPkmn = useStoringPkmn()


    const executeMultipleStoringOperation = (pkmn) => {
      
        const operationsParameters = ['team-to-box', 'box-to-team']
        storingPkmn({type:operationsParameters[0],pkmn});
    
        storingPkmn({type:operationsParameters[1],pkmn: isVisible.pkmn});
    }

    const test = (pkmn) => {
       if(!showModal) executeMultipleStoringOperation(pkmn)

        updateShowModal(true)
        modalStateFn({pkmnId: null, modalId: null, disableOtherBtns: false, message: ''})
    }

    const setEverithingOff = () =>{
        method({pkmn: {}, show:false})

        updateShowModal(false)
    }
    return (<>
        {(isVisible.show && isVisible.pkmn.uniqueId) && <div className="bg-dark p-5 position-absolute text-light">
                    
                {teamPkmn.map(pkmn => 
                     <div onClick={() => test(pkmn)}>
                        <p>{pkmn.name}</p> 
                        <img src={pkmn.sprites.front_default} alt="pokemon sprite."/>
                    </div>
                )}
                {showModal &&
                    <CustomModal message={'successfully team updated!'}>
                        <CustomBtn fn={{fn:setEverithingOff, parameters:[]}} label="Close" />

                    </CustomModal>
                }

    </div>}
    </>)
}

export default SmTeamChangeBox;