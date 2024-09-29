import React, { useEffect, useState } from "react";
import { downloadData, downloadData2 } from "../../utils/downloadData";
import styles from './cmtooltip.module.css'

const CmTooltip = ({data, propName, position}) => {
    const [deta, setData] = useState({})
    useEffect(()=> {
        console.log(data.type)
       // downloadData(data.type, setData)
        
    }, [])
    console.log(deta)
    return (<div className={`${styles.cmTooltip} text-dark p-4 rounded position-absolute`} style={position}>            
            {propName.map(prop => <div className="bg-light p-2 rounded mt-1 text-center">
                <p className={`${styles.cmTooltip} rounded p-2`}>{prop}</p>
                <p>{data[prop]}</p>
            </div>)}
            

    </div>)
}


export default CmTooltip;