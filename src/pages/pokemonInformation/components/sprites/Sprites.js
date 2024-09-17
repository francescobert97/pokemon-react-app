import React from "react";
import styles from './sprites.module.css'

const Sprites = ({sprites}) => {
    console.log(sprites)
    return (
        <div className={`${styles.sprites} bg-dark w-100`}>
            <h2 className="col-2 mx-auto mt-5">Sprites</h2>
            <div className="">

                <img className="" src={sprites.front_default} />
  

                <img className="" src={sprites.back_default} />
            </div>
  
        </div>)
}


export default Sprites;