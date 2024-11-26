import React, { useEffect, useState } from "react";
import CustomBtn from "../custom-btn/CustomBtn";
import CustomModal from "../custom-modal/CustomModal";
import { useStoringPkmn } from "../../hooks/useStoringPkmn/useStoringPkmn";
import settings from '../../assets/icons/settings-gear-icon.png'
import PkmnCard from "../Pkmn-card/PkmnCard";
import styles from './PokemonsBoxContainer.module.css'
import Spinner from '../spinner/Spinner'
const PokemonsBoxContainer = ({pkmns,types,classes, noPkmncustomMessage, reference, children, childPropsNeeded = false}) => {

    const storingPkmn = useStoringPkmn();
    const initialBoxContainerState = {
        isBtnListVisible: {show:false, id: null},
        isPokemonChoosingVisible: {},
        modalState: {
            pkmnId: null, 
            modalId: null, 
            message: '', 
            disableOtherBtns: false
        }
    }

    const [boxContainerState, updateBoxContainerState] = useState(initialBoxContainerState)
   

    const pkmnProcessHandler = (pkmn, type) => {
        const hasNextStep = type.modalMsg.find(m => m.hasNextStep)
      return  hasNextStep && hasNextStep.condition() ?       
        (updateBoxContainerState({isPokemonChoosingVisible: {...pkmn}, 
        modalState: {
          ...initialBoxContainerState.modalState,
            disableOtherBtns: true
        },
        isBtnListVisible: initialBoxContainerState.isBtnListVisible
    })
    )
        :
        (storingPkmn({pkmn, type:type.operation}),
        updateBoxContainerState(state => ({...state, modalState: initialBoxContainerState.modalState, isBtnListVisible: initialBoxContainerState.isBtnListVisible }))
    );

    }

    useEffect(() => console.log(boxContainerState),[boxContainerState])

    const setModalProperties = (obj, pkmn ) => {
     
                const result = obj.modalMsg.find(modal => modal.condition);

                if(result && result.condition()) {
                    updateBoxContainerState( state => ({...state, modalState:{pkmnId: pkmn.uniqueId, modalId: result.id, disableOtherBtns: true, message:result.message}}))

                    return;
                }
                
                    const msgWithNoCondition = obj.modalMsg.find(modal => !modal.condition)
                    updateBoxContainerState( state => ({...state, modalState:{pkmnId: pkmn.uniqueId, modalId: msgWithNoCondition.id, disableOtherBtns: true, message:msgWithNoCondition.message}}))

                
        
        
        }
    
    return (
    <div className="d-flex flex-column ">
        <CustomBtn classes={'ms-2 mb-3 mt-3 align-self-start'} pathLink={'/'}/>
        <div className={` ${classes} g-0 row flex-grow-1 align-items-center gap-1 position-relative overflow-y-scroll`}>
            {pkmns.length > 0? pkmns.map((pkmn, index) => (
                    <div data-testid={pkmn.uniqueId} key={pkmn.uniqueId} className={`${styles.pkmnCard} d-flex  flex-column align-items-center justify-content-center rounded p-2 col-9 mx-auto col-md-3 overflow-hidden position-relative`}>
                                    <PkmnCard pkmn={pkmn} reference={reference} iterationIndex={index}>
                                        <button className="btn" onClick={() => updateBoxContainerState(state => ({...state, isBtnListVisible:{show: !state.isBtnListVisible.show, id: pkmn.uniqueId}}))}><img src={settings} alt="settings-icon" style={{width: '30px', height:'30px'}} /></button>
                                    </PkmnCard>
                        <div className={`${boxContainerState.isBtnListVisible.show && pkmn.uniqueId === boxContainerState.isBtnListVisible.id ? 'd-block' : 'd-none'} cm-window p-3   rounded top-25 position-absolute`}>
                            {types.map((type,index) =>
                                <React.Fragment key={index}> 
                                        <CustomBtn classes={'p-1 mt-3'} conditionToDisableBtn={boxContainerState.modalState.disableOtherBtns} label={type.label} funzione={() => setModalProperties(type,pkmn)} />
                                        { (boxContainerState.modalState.pkmnId === pkmn.uniqueId && type.modalMsg.find(m => m.id === boxContainerState.modalState.modalId) ) &&
                                            <CustomModal classes={'cm-window border-0 w-100 rounded d-flex flex-column align-items-center  top-0 start-0'} message={boxContainerState.modalState.message}>
                                                <div className="d-flex">
                                                    <CustomBtn  funzione={() => pkmnProcessHandler(pkmn,type)} classes="p-2 m-1" label="yes"/>
                                                    <CustomBtn  funzione={() => updateBoxContainerState(state => ({...state, modalState:{pkmnId: null, modalId: null, disableOtherBtns: false, message: ''}}))} classes="p-2 m-1" label="no" />
                                                </div>
                                            </CustomModal> 
                                        }
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                )): <Spinner />}

                {childPropsNeeded && React.cloneElement(children,{method:updateBoxContainerState,isVisible:boxContainerState.isPokemonChoosingVisible, modalStateFn: updateBoxContainerState})}                      
        </div>
    </div>)
}

export default PokemonsBoxContainer;