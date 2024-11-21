import React from "react";
import { Link } from "react-router-dom";
import styles from './CustomBtn.module.css'
import capitalizeString from '../../utils/capitalizeString/capitalizeString'
import customBtnImg from '../../assets/custom-btn.webp'
const CustomBtn = ({label='close', classes, pathLink, fn, conditionToDisableBtn = false}) => {
    const executePropsFn = () => {
      return  fn.fn(...fn.parameters)
    }
    return (
        
            pathLink?     (<Link className="text-decoration-none text-dark" to={pathLink}>
              <button disabled={conditionToDisableBtn} onClick={fn? executePropsFn : undefined} id={styles.customBtn} className={`btn ${classes} position-relative`}>
                <span>{capitalizeString(label)}</span>
                </button> 
              </Link> )
            : 
             (<button disabled={conditionToDisableBtn} onClick={fn? executePropsFn : undefined} id={styles.customBtn} className={`btn ${classes} position-relative text-dark`}><span>{capitalizeString(label)}</span></button>)

        
    )
}

export default CustomBtn;

//<img className="position-absolute" src={customBtnImg} />