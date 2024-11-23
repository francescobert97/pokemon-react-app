import React from "react";
import styles from './IconBoxMenu.module.css'
import { layoutImgs } from "../../utils/types-map";


const IconBoxMenu = ({classes, dimension,iconName, children}) => {
 const image = Object.entries(layoutImgs).find(imgLink => imgLink[0] === iconName)

 return (     
    <div className={`${styles.iconBoxMenu} ${classes}`}>
        {
            children && children 
        }
       
       {iconName? <img src={image[1]} alt="main menu button icon." className="w-100 h-100"  style={{maxWidth: `${dimension.width}`, maxHeight: `${dimension.height}`}} /> : 'no image'}
    </div>
    )
}

export default IconBoxMenu;