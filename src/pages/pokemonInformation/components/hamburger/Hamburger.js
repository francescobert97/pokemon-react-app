import React from "react";
import styles from './hamburger.module.css'
const Hamburger = ({openMenu}) => {
 return ( <div onClick={openMenu} id={`${styles.hamburger}`} className={`d-flex d-md-none  h-100  flex-column  fw-bold `}>
    <span style={{lineHeight:0.5}}>___</span>
    <span  style={{lineHeight:0.5}}>___</span>
    <span  style={{lineHeight:0.5}}>___</span>
</div>)
}

export default Hamburger;