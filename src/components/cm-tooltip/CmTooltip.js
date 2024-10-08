import React, { useEffect, useState } from "react";
import { downloadData, downloadData2 } from "../../utils/downloadData";
import styles from './cmtooltip.module.css'

const CmTooltip = ({data, propName}) => {
    const [deta, setData] = useState({})
    useEffect(()=> {
        console.log(data.type)
       // downloadData(data.type, setData)
        
    }, [])
    console.log(deta)
    return (<div className={`${styles.cmTooltip} text-dark p-4 rounded position-absolute top-50`}>
        tooltip
            
            {propName.map(prop => <div>
                <p>{data[prop]}</p>
            </div>)}
            

    </div>)
}


export default CmTooltip;