import React, { useEffect, useState } from "react";
import CustomBtn from "../custom-btn/CustomBtn";
import CustomModal from "../custom-modal/CustomModal";
import { useStoringPkmn } from "../../hooks/useStoringPkmn/useStoringPkmn";
import settings from '../../assets/settings-gear-icon.png'
import PkmnCard from "../Pkmn-card/PkmnCard";
import styles from './PokemonsBoxContainer.module.css'

const PokemonsBoxContainer = ({pkmns,types,classes, noPkmncustomMessage, reference, children, childPropsNeeded = false}) => {
    const [isBtnListVisible, updateIsBtnListVisible] = useState({show:false, id: null});
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
    <div className="d-flex flex-column ">
        <CustomBtn classes={'mb-3 mt-3'} pathLink={'/'}/>
        <div className={` ${classes} row flex-grow-1 align-items-center gap-1`} style={{overflowY:'scroll'}}>
            {pkmns.length > 0? pkmns.map((pkmn, index) => (
                    <div data-testid={pkmn.uniqueId} key={pkmn.uniqueId} className={`${styles.pkmnCard} d-flex  flex-column align-items-center justify-content-center rounded p-2 col-9 mx-auto col-md-3 overflow-hidden`}>
                                    <PkmnCard pkmn={pkmn} reference={reference} iterationIndex={index}>
                                        <button className="btn" onClick={() => updateIsBtnListVisible(state => ({show: !state.show, id: pkmn.uniqueId}))}><img src={settings} alt="settings-icon" style={{width: '30px', height:'30px'}} /></button>
                                    </PkmnCard>
                        <div className={`${ isBtnListVisible.show && pkmn.uniqueId === isBtnListVisible.id ? 'd-block' : 'd-none'} position-absolute`}>
                            {types.map((type,index) =>
                                <React.Fragment key={index}> 
                                        <CustomBtn classes={'p-1 mt-3 '} conditionToDisableBtn={modalState.disableOtherBtns} label={type.label} fn={{fn:setModalProperties, parameters:[type,pkmn]}} />
                                        { (modalState.pkmnId === pkmn.uniqueId && type.modalMsg.find(m => m.id === modalState.modalId) ) &&
                                            <CustomModal classes={'bg-dark p-5 rounded d-flex flex-column align-items-center top-50 '} message={modalState.message}>
                                                <div>
                                                    <CustomBtn fn={ {fn: pkmnProcessHandler, parameters: [pkmn, type]}} classes="p-2 m-1" label="yes"/>
                                                    <CustomBtn fn={{fn:setModalState , parameters: [{pkmnId: null, modalId: null, disableOtherBtns: false, message: ''}]}} classes="p-2 m-1" label="no" />
                                                </div>
                                            </CustomModal> 
                                        }
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                )): <p>{noPkmncustomMessage? noPkmncustomMessage : 'no-information'}</p>}

                {childPropsNeeded && React.cloneElement(children,{method:updateIsPokemonChoosingVisible,isVisible:isPokemonChoosingVisible, modalStateFn: setModalState})}                      
        </div>
    </div>)
}

export default PokemonsBoxContainer;