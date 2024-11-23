import React from "react";
import spinner from '../../assets/icons/loading.svg'
import styles from './spinner.module.css'

const Spinner = () => {
    return (<img className={`${styles.spinnerAnimation} mt-3`} alt="spinner" src={spinner}/>)
}

export default Spinner;