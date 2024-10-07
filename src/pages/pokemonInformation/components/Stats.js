import React, { useEffect, useState } from "react";
import CustomTitleBox from "../../../components/custom-titlebox/CustomTitleBox";
import capitalizeString from "../../../utils/capitalizeString";
import { downloadData2, downloadData3 } from "../../../utils/downloadData/downloadData";


const Stats = ({stats}) => {
    const [data, setData] = useState([])
    console.log(stats)
    useEffect(() => {
        downloadData2(stats, 'stat',setData)
       // downloadData3(stats, ['stat','characteristics'],2)

    },[])
    console.log(data)
    
    return (
        <div className="bg-dark rounded p-2 w-100">
           
            {stats.map(stat => (
                <div key={stat.id} className="p-4" >
                    <div className="d-flex justify-content-between align-items-center bg-light rounded text-dark ">
                        <CustomTitleBox title={capitalizeString(stat.stat.name)} />
                        <p className="fs-5 fw-bold me-2">{stat.base_stat}</p>
                    </div>
    
                </div>
            ))} 
        </div>)
}


export default Stats;