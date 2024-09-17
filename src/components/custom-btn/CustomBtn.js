import React from "react";
import { Link } from "react-router-dom";
import styles from './CustomBtn.module.css'
import capitalizeString from '../../utils/capitalizeString'
const CustomBtn = ({label='close', classes, pathLink, fn, conditionToDisableBtn = false}) => {
    const executePropsFn = () => {
      return  fn.fn(...fn.parameters)
    }
    return (
        
            pathLink?     (<Link className="text-decoration-none text-dark" to={pathLink}><button disabled={conditionToDisableBtn} onClick={fn? executePropsFn : undefined} id={styles.customBtn} className={`btn ${classes}`}>{capitalizeString(label)}</button> </Link> )
            : 
             (<button disabled={conditionToDisableBtn} onClick={fn? executePropsFn : undefined} id={styles.customBtn} className={`btn ${classes}`}>{capitalizeString(label)}</button>)

        
    )
}

export default CustomBtn;