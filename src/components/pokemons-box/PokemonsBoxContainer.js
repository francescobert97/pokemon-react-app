import React, { useState } from "react";
import CustomBtn from "../custom-btn/CustomBtn";
import CustomModal from "../custom-modal/CustomModal";
import { useStoringPkmn } from "../../hooks/useStoringPkmn";
import PkmnCard from "../Pkmn-card/PkmnCard";

const PokemonsBoxContainer = ({pkmns,types,classes, noPkmncustomMessage, reference, children, childPropsNeeded = false}) => {
    const [isPokemonChoosingVisible, updateIsPokemonChoosingVisible] = useState({id: null, show:false})
    const storingPkmn = useStoringPkmn();
    const [modalState, setModalState] = useState({
        pkmnId: null, 
        modalId: null, 
        message: '', 
        disableOtherBtns: false
    });
    

    const pkmnProcessHandler = (pkmn, type) => {
        const hasNextStep = type.modalMsg.find(m => m.hasNextStep)
      return  hasNextStep && hasNextStep.condition() ?       
        (updateIsPokemonChoosingVisible({pkmn, show: true}),
        setModalState({pkmnId: null, modalId: null, disableOtherBtns: true, message:''}))
        :
        (storingPkmn({pkmn, type:type.operation}),
        setModalState({pkmnId: null, modalId: null, disableOtherBtns: false, message:''}))

    }

    const setModalProperties = (obj, pkmn ) => {
     
                const result = obj.modalMsg.find(modal => modal.condition);

                if(result && result.condition()) {
                    setModalState({pkmnId: pkmn.uniqueId, modalId: result.id, disableOtherBtns: true, message:result.message})
                    return;
                }
                
                    const msgWithNoCondition = obj.modalMsg.find(modal => !modal.condition)
                    setModalState({pkmnId: pkmn.uniqueId, modalId: msgWithNoCondition.id, disableOtherBtns: true, message:msgWithNoCondition.message})
                
        
        
        }
    return (
    <div className="container-fluid">
        <CustomBtn classes={'mb-3 mt-3'} pathLink={'/'}/>
        <div className={`${classes} row`} style={{overflowY:'scroll'}}>
        {pkmns.length > 0? pkmns.map(pkmn => (
                <div key={pkmn.uniqueId} className="d-flex flex-column align-items-center justify-content-center bg-light rounded p-4 col-9 offset-1 flex-wrap` col-sm-2">
                                <PkmnCard pkmn={pkmn} reference={reference}/>
                    {types.map((type,index) =>
                        <div key={index}> 
                                <CustomBtn classes={'p-2 mt-3'} conditionToDisableBtn={modalState.disableOtherBtns} label={type.label} fn={{fn:setModalProperties, parameters:[type,pkmn]}} />
                                { (modalState.pkmnId === pkmn.uniqueId && type.modalMsg.find(m => m.id === modalState.modalId) ) &&
                                    <CustomModal classes={'bg-dark p-5 rounded d-flex flex-column align-items-center'} message={modalState.message}>
                                        <div>
                                            <CustomBtn fn={ {fn: pkmnProcessHandler, parameters: [pkmn, type]}} classes="p-2 m-1" label="yes"/>
                                            <CustomBtn fn={{fn:setModalState , parameters: [{pkmnId: null, modalId: null, disableOtherBtns: false, message: ''}]}} classes="p-2 m-1" label="no" />
                                        </div>
                                    </CustomModal> 
                                }
                        </div>
                    )}
                </div>
            )): <p>{noPkmncustomMessage? noPkmncustomMessage : 'no-information'}</p>}

            {childPropsNeeded && React.cloneElement(children,{method:updateIsPokemonChoosingVisible,isVisible:isPokemonChoosingVisible, modalStateFn: setModalState})}                      
            </div>
    </div>)
}

export default PokemonsBoxContainer;