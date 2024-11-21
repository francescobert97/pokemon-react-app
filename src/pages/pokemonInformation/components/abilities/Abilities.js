import React, { useEffect, useState } from "react";
import capitalizeString from "../../../../utils/capitalizeString/capitalizeString";
import { downloadData2 } from "../../../../utils/downloadData/downloadData";
import Spinner from "../../../../components/spinner/Spinner";


const Abilities = ({sectionBG, abilities}) => {
    const [fetchedAbilitiesData, setFetchedAbilitiesData] = useState([])
    
    const setAbilitiesdata = async () => {
        setFetchedAbilitiesData(await downloadData2(abilities,'ability'))
    }
    useEffect( () => {
        setAbilitiesdata();
    },[])

    return (
        <div className="text-dark rounded ">
            {abilities? fetchedAbilitiesData.map(ability => (
                <div key={ability.id} className="d-flex flex-column p-2 p-sm-0 align-items-center justify-content-center">

                    <h2>{capitalizeString(ability.name)}</h2> 
                    <p className="bg-light text-dark p-3 rounded">
                        {ability.flavor_text_entries.find(text => text.language.name === 'en').flavor_text}
                    </p>
                </div> 
            ))
            : <Spinner />
        } 
        </div>)

}


export default Abilities;