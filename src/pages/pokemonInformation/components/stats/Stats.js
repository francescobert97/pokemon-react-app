import React, { useEffect, useState } from "react";
import CustomTitleBox from "../../../../components/custom-titlebox/CustomTitleBox";
import capitalizeString from "../../../../utils/capitalizeString/capitalizeString";
import { downloadData2 } from "../../../../utils/downloadData/downloadData";
import Spinner from "../../../../components/spinner/Spinner";


const Stats = ({sectionBG, stats}) => {
    const [data, setData] = useState([])
    console.log(stats)
    useEffect(() => {
        downloadData2(stats, 'stat',setData)
    },[])
    console.log(data)
    
    return (
        <div className="  rounded  w-100 ">
           
            {stats? stats.map(stat => (
                <div key={stat.id} className="p-4" >
                    <div className="d-flex justify-content-between align-items-center bg-light rounded text-dark ">
                        <CustomTitleBox title={capitalizeString(stat.stat.name)} />
                        <p className="fs-5 fw-bold me-2">{stat.base_stat}</p>
                    </div>
    
                </div>
            )) :  <Spinner />} 
        </div>)
}


export default Stats;