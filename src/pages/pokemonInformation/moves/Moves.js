import React, { useEffect, useState } from "react";
import CmTooltip from "../../../components/cm-tooltip/CmTooltip";
import { downloadData, downloadData2, downloadData3 } from "../../../utils/downloadData";


const Moves = ({moves}) => {
    const [data, setData] = useState([])
    const [typePicture, setTypePicture] = ('')
    const [showTooltip, updateShowTooltip] = useState({tooltipId: null, isOpen: false}); 
    console.log(moves)
    const componingObject = (fetchedData,props) => {
        let arr = []
       fetchedData.forEach((element,index) => {
        let obj = {}
        arr.push(element.map( el => {
            
           //el[props[index]]
         return {...props} = el

        }))


       });
          
        console.log(arr)
    }

    useEffect(() => {
        //downloadData2(moves, 'move',setData)
       downloadData3(moves, ['move','type'], setData)

        
    },[])
    console.log(data)
    const props = [['name', 'accuracy'],['sprites']]
        
            console.log(componingObject(data, props))

   
    return (<div className="d-flex flex-column rounded gap-2 w-100 bg-dark vh-100 mt-3 p-2 " style={{overflowY: 'scroll'}}>
        
        

        {data?.map(move => {
                        console.log(data)

            const moveDescription = move.flavor_text_entries.find(text => text.language.name === 'en')?.flavor_text || 'no description available'
            const tooltipObj = {
                moveDescription,
                accuracy: move.accuracy
            }
            //downloadData(data.type, setData);
        return (
                    <>
                        <div key={move.id} onClick={() => updateShowTooltip({tooltipId:move.id, isOpen: !showTooltip.isOpen})} className="d-flex justify-content-between align-items-center bg-light rounded text-dark ">
                            <h2>{move.name}</h2>
                            <p><span className="fw-bold">Power</span> {move.power}</p> 
                            <p><span className="fw-bold">PP</span> {move.pp}</p> 

                        </div>

                        {(showTooltip.tooltipId === move.id && showTooltip.isOpen) && <CmTooltip data={tooltipObj} propName={['moveDescription', 'accuracy']} />}
                    </>
            )
            
    })}

  
    </div>)
}


export default Moves;