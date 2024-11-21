import React from "react";
import styles from './sprites.module.css'
import Spinner from "../../../../components/spinner/Spinner";

const Sprites = ({sprites}) => {
    console.log(sprites)
    return (
        <div className={`${styles.sprites}  w-100`}>
            <h2 className="col-2 mx-auto gradient-bg p-3 text-center text-dark rounded">Sprites</h2>
            <div className="d-flex flex-sm-row justify-content-center flex-column">
                {sprites.front_default? <img src={sprites.front_default} alt="front-sprite"/> : <Spinner />}
                {sprites.back_default? <img src={sprites.back_default} alt="back-sprite"/> : <Spinner />}
            </div>
  
        </div>)
}


export default Sprites;