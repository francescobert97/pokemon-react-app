import React, { useEffect, useState } from "react";
import CmTooltip from "../../../../components/cm-tooltip/CmTooltip";
import { downloadData2 } from "../../../../utils/downloadData/downloadData";
import { getPokemonTypeMoves } from "../../../../services/pokemon.service";
import { imgs } from "../../../../utils/types-map";


const Moves = ({moves}) => {
    
    const [data, setData] = useState([]);
    const [showTooltip, updateShowTooltip] = useState({tooltipId: null, isOpen: false}); 
    const collectedTypePicture = async () => {
        const typeImgs = new Map(Object.entries(imgs).map(d => [d[0], d[1]]))
        const fetchedData = await  downloadData2(moves, 'move');
        let dataWithNoErrors = fetchedData.filter(move => !move.err);
       return dataWithNoErrors.map(move => ({...move, typeIcon:  typeImgs.get(move.type.name)}))
    }
    const setCompletedData = async() =>{
      setData(await collectedTypePicture());
    }
    useEffect( () => {
       setCompletedData();
    },[])

    return (
    <div className="d-flex flex-column rounded gap-2 w-100 bg-dark vh-100 mt-3 p-2 " style={{overflowY: 'scroll'}}>
        {data.length > 0? data?.map((move,index) => {
            const moveDescription = move.flavor_text_entries.find(text => text.language.name === 'en')?.flavor_text || 'no description available'
            const tooltipObj = {
                moveDescription: moveDescription,
                accuracy: move.accuracy
            }
        return (
                    <React.Fragment  key={move.id}>
                        <div data-testid={`element-${index}`} onClick={() => updateShowTooltip({tooltipId:move.id, isOpen: !showTooltip.isOpen})} className="d-flex justify-content-between align-items-center bg-light rounded text-dark ">
                            <h2 className="fs-5">{move.name}</h2>
                            <p><span className="fw-bold">Power</span> {move.power? move.power : 'unknown'}</p> 
                            <p><span className="fw-bold">PP</span> {move.pp}</p>        
                                <img src={move.typeIcon} alt="element type icon" style={{width: '85px', height: '30px'}}/>
                        </div>

                        {(showTooltip.tooltipId === move.id && showTooltip.isOpen) && <CmTooltip tooltipId={{'data-testid':`tooltip-${index}`}} data={tooltipObj} position={{top: '50%', left: '25%'}} />}
                    </React.Fragment>
            )
            
    }) : <p>There is no data.</p>}
    

  
    </div>)
}


export default Moves;