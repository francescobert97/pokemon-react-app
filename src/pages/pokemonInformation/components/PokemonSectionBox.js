import React from "react";

const PokemonSectionBox = (sectionData, nameInternProp) => {
    return (
        <div>
        {sectionData && sectionData.state.sectionData.map(data => (
            <div key={data.id} className="d-flex flex-column align-items-center justify-content-center">
                {data}
            </div>
        ))} 
    </div>)
}

export default PokemonSectionBox;