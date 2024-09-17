import React from "react";
import styles from './customtitlebox.module.css'


const CustomTitleBox = ({title}) => {
    return (
        <div className={`${styles.cmBackground} h-100 d-flex`}>
                <h2 className={`ms-3 w-100 h-100`}>{title}</h2>
        </div>
    )
}

export default CustomTitleBox;