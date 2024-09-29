import React, { useEffect, useState } from "react";
import CmTooltip from "../../../../components/cm-tooltip/CmTooltip";
import { downloadData, downloadData2, downloadData3 } from "../../../../utils/downloadData";
import { getPokemonTypeMove, getPokemonTypeMoves } from "../../../../services/pokemon.service";


const Moves = ({moves}) => {
    console.log(JSON.stringify(moves))
    const collettingTypes = new Map();
    const [data, setData] = useState([]);
    const [showTooltip, updateShowTooltip] = useState({tooltipId: null, isOpen: false}); 

    const componingObject =  async () => {
       const fetchedData = await  downloadData2(moves, 'move',setData)

       fetchedData.map((element) =>collettingTypes.set(element.type.name,element.type.url))

        const movesTypeIcon = await getPokemonTypeMoves(Array.from(collettingTypes.values()));
        const typeIconMap = new Map(movesTypeIcon.map(type => [type.name, type.sprites]))
        const composedObject = fetchedData.map(element => {
            return {...element, sprites:typeIconMap.get(element.type.name)
        };
      })
      return composedObject;
    }

    const setCompletedData = async() =>{
       setData(await componingObject());
    }

    useEffect( () => {
       setCompletedData();
    },[])

    return (<div className="d-flex flex-column rounded gap-2 w-100 bg-dark vh-100 mt-3 p-2 " style={{overflowY: 'scroll'}}>
        
        

        {data?.map((move,index) => {

            const moveDescription = move.flavor_text_entries.find(text => text.language.name === 'en')?.flavor_text || 'no description available'
            const tooltipObj = {
                moveDescription: moveDescription,
                accuracy: move.accuracy
            }
        return (
                    <>
                        <div data-testid={`element-${index}`} key={move.id} onClick={() => updateShowTooltip({tooltipId:move.id, isOpen: !showTooltip.isOpen})} className="d-flex justify-content-between align-items-center bg-light rounded text-dark ">
                            <h2 className="fs-5">{move.name}</h2>
                            <p><span className="fw-bold">Power</span> {move.power? move.power : 'unknown'}</p> 
                            <p><span className="fw-bold">PP</span> {move.pp}</p> 
                            <img src={move.sprites[`generation-viii`]['sword-shield'].name_icon} alt="element type icon" style={{width: '85px', height: '30px'}}/>
                        </div>

                        {(showTooltip.tooltipId === move.id && showTooltip.isOpen) && <CmTooltip data-testid={`tooltip-${index}`} data={tooltipObj} propName={['moveDescription', 'accuracy']} position={{top: '50%', left: '25%'}} />}
                    </>
            )
            
    })}
    <p>{}</p>

  
    </div>)
}


export default Moves;