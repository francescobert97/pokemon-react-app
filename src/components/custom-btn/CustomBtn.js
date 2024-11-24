import React from "react";
import { Link } from "react-router-dom";
import styles from './CustomBtn.module.css'
import capitalizeString from '../../utils/capitalizeString/capitalizeString'
const CustomBtn = ({label='close', classes, pathLink, fn, conditionToDisableBtn = false,funzione, children}) => {

    return (
        
            pathLink? (<Link id={styles.customBtn} className={` ${classes} text-decoration-none rounded text-dark`} to={pathLink}>
              <button disabled={conditionToDisableBtn} onClick={funzione}  className={`btn ${classes} position-relative`}>
                  {children? children : <span>{capitalizeString(label)}</span>}
                </button> 
              </Link> )
            : 
             (<button disabled={conditionToDisableBtn} onClick={funzione} id={styles.customBtn} className={`btn ${classes} position-relative text-dark`}>{children? children : <span>{capitalizeString(label)}</span>}</button>)

        
    )
}

export default CustomBtn;