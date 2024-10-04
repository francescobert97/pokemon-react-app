import React from "react";
import styles from './cmtooltip.module.css'

const CmTooltip = ({tooltipId,data, position}) => {
    const dataKeysArr = Object.keys(data);
    return (<div {...tooltipId} className={`${styles.cmTooltip} text-dark p-4 rounded position-absolute`} style={position}>       
            {dataKeysArr.length > 0? dataKeysArr.map(prop => <div key={prop + Math.floor(Math.random() * 10000)} className="bg-light p-2 rounded mt-1 text-center">
                <p className={`${styles.cmTooltip} rounded p-2`}>{prop}</p>
                <p>{data[prop]}</p>
            </div>) : <p>There is no data.</p>}
            

    </div>)
}


export default CmTooltip;