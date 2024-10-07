import React from "react";
import CustomBtn from "../custom-btn/CustomBtn";

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '').replace(/\.[^/.]+$/, "")] = r(item);
    });
    return images;
  };

  const imgs = importAll(require.context('../../assets', false, /\.(webp|png|jpe?g|svg)$/));
const IconBoxMenu = ({classes, btnLabel, dimension, pathLink,iconName, children}) => {
 const image = Object.entries(imgs).find(imgLink => imgLink[0] === iconName)

 return (     
    <div className={`${classes}`}>
        {
            children? children : <CustomBtn pathLink={pathLink} classes={'p-2'} label={btnLabel} />
        }
       
       {iconName? <img src={image[1]} alt="main menu button icon." className="w-100 h-100"  style={{maxWidth: `${dimension.width}`, maxHeight: `${dimension.height}`}} /> : 'no image'}
    </div>
    )
}

export default IconBoxMenu;