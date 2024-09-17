import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import capitalizeString from "../../../utils/capitalizeString";
import { downloadData, downloadData2 } from "../../../utils/downloadData";


const Abilities = ({abilities}) => {
    const [fetchedAbilitiesData, setFetchedAbilitiesData] = useState([])
  
    useEffect( () => {
        downloadData2(abilities,'ability', setFetchedAbilitiesData)
    },[])

    console.log(fetchedAbilitiesData)
    return (
        <div className="bg-dark p-3 rounded mt-5">
            {abilities && fetchedAbilitiesData.map(ability => (
                <div key={ability.id} className="d-flex flex-column align-items-center justify-content-center">

                    <h2>{capitalizeString(ability.name)}</h2> 
                    <p className="bg-light text-dark p-3 rounded">
                        {ability.flavor_text_entries.find(text => text.language.name === 'en').flavor_text}
                    </p>
                </div>
            ))} 
        </div>)

}


export default Abilities;