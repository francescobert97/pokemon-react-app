import React, { useRef, useState } from "react";
import CustomBtn from "../../../../components/custom-btn/CustomBtn";
import stylesCustomBtn from '../../../../components/custom-btn/CustomBtn.module.css'
import Hamburger from "../hamburger/Hamburger";
import styles from './pokemoninfonavbar.module.css'
const PokemonInfoNavbar = ({reference}) => {
    const previousPathreference = useRef(reference);
    const [menuOpen, setMenuOpen] = useState(false);
    const openMenu =() => {
        console.log('trigger')
        setMenuOpen(!menuOpen);
    } 
    return (
        <div id={`${styles.infoNavbar}`} className="bg-dark p-4">
                <Hamburger openMenu={openMenu} />
            <ul className={` ${menuOpen? 'd-flex' : 'd-none'} d-md-flex justify-content-around col-12 bg-dark p-4 w-100`}>
     
                <li><CustomBtn classes={`${stylesCustomBtn.infoNavbar}`} pathLink={`/${previousPathreference.current}`} label={'Close'} /></li>
                <li><CustomBtn fn={{fn:openMenu, parameters:[]}} classes={`${stylesCustomBtn.infoNavbar}`} pathLink={'abilities'} label={'abilities'} /></li>
                <li><CustomBtn  fn={{fn:openMenu, parameters:[]}} classes={`${stylesCustomBtn.infoNavbar}`} pathLink={'stats'} label={'stats'} /></li>
                <li><CustomBtn  fn={{fn:openMenu, parameters:[]}} classes={`${stylesCustomBtn.infoNavbar}`} pathLink={'moves'} label={'moves'} /></li>
                <li><CustomBtn  fn={{fn:openMenu, parameters:[]}} classes={`${stylesCustomBtn.infoNavbar}`} pathLink={'sprites'} label={'sprites'} /></li>
            </ul>
        </div>

    )
}


export default PokemonInfoNavbar


//${styles.menu}