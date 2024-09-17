import React from "react";
import { Link } from "react-router-dom";
import CustomBtn from "../custom-btn/CustomBtn";

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '').replace(/\.[^/.]+$/, "")] = r(item);
    });
    return images;
  };

  const imgs = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));

const IconBoxMenu = ({classes, btnLabel, dimension, pathLink,iconName, children}) => {
 const image = Object.entries(imgs).find(imgLink => imgLink[0] === iconName)

    return (     
    <div className={`${classes}`}>
        {
            children? children : <CustomBtn pathLink={pathLink} classes={'p-2'} label={btnLabel} />
        }
       
        <img src={image[1]} className="w-100 h-100"  style={{maxWidth: `${dimension.width}`, maxHeight: `${dimension.height}`}} />
    </div>
    )
}

export default IconBoxMenu;