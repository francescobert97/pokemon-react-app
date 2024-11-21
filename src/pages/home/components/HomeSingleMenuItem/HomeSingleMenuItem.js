import React, { useEffect, useRef, useState } from "react";
import styles from './HomeSingleMenuItem.module.css'
import fica from '../../../../assets/pokedex.webp';
import fica2 from '../../../../assets/pngwing.com.webp'
import ring from '../../../../assets/ring.png';
import homeBtn from '../../../../assets/homeButton.png'
import trainer from '../../../../assets/pokemon-trainer.webp'
import charizard from '../../../../assets/Charizard.png'
import customBox from '../../../../assets/Progetto senza titolo (7)-Photoroom.webp';
import customSmallBox from '../../../../assets/Progetto senza titolo (1)-Photoroom-Photoroom.webp';

import { Link } from "react-router-dom";

const HomeSingleMenuItem = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [isResized, setIsResized] = useState(true);
    const scrollDivRef = useRef(null);
    const scroller = useRef(null);
    const homeContents = [
        {
            bg: fica,
            nameSection: 'POKEDEX',
            description: 'Explore the world of Pokémon! Dive into a complete Pokédex filled with detailed informations and evolutionary lines for every Pokémon.',
            path: '/pokedex'
        },
        {
            bg: charizard,
            nameSection: 'TEAM',
            description: 'Build your ultimate Pokémon dream team! Strategize and assemble the perfect lineup for battles and adventures.',
            path: '/team'
        },
        {
            bg: fica2,
            nameSection: 'BOX',
            description: 'Organize and manage your Pokémon collection. Store, view, and move your Pokémon with ease in the Pokémon Box.',
            path: '/box'
        },
        {
            bg: trainer,
            nameSection: 'CATCH POKEMON',
            description: 'Venture into the wild and catch new Pokémon! Test your skills and expand your roster in the thrilling Capture Zone.',
            path: '/pkmnCatchArea'
        },
    ]

    useEffect(() =>{
        scrollDivRef.current.addEventListener('wheel', switchContent)
        window.addEventListener('resize', () => (window.innerWidth > 768? setIsResized(true) : setIsResized(false)))

    }, [])

    const switchContent = (e) => {
        console.log('onresize trigger')
        const delta = e.deltaY

        if(scroller.current) {
            return;
        }

        if(!scroller.current) {
            scroller.current = setTimeout(() => {
                scroller.current = null
                delta > 0? 
                setScrollIndex(prevState => (prevState +1) % homeContents.length)
                :
                setScrollIndex(prevState => prevState > 0? prevState -1 : homeContents.length-1)
            }, 1000)
        }
    }

    return (
        <div ref={scrollDivRef} className={`${styles.scrollHomeMenu} no-bar w-100  d-flex flex-column flex-md-row align-items-center justify-content-evenly`}>   
            <div className="position-relative">
                <div className={`${styles.ring}`}><img className="w-100 h-100" src={ring} alt="ring-image" /></div>
                <img className="absolute-center-element" src={homeContents[scrollIndex].bg}  alt="icon home menù"/>
            </div>
        
            <div className={`${styles.contentInfoBox} d-flex flex-column flex-md-row position-relative gap-5 text-dark`}>
                <img src={isResized? customBox : customSmallBox} alt="custom box"/>
                <div className="position-absolute w-25 d-flex flex-column ">
                    <h1 className="custom-text-shadow fs-l-1 fs-4 fs-md-3 mb-l-3">{homeContents[scrollIndex]?.nameSection}</h1>
                    {isResized && <p className=" custom-text-shadow ">{homeContents[scrollIndex]?.description}</p>}
                </div>

                <button className="btn  position-relative align-self-md-end  me-2">
                        <Link to={homeContents[scrollIndex].path} >
                            <p className=" absolute-center-element fs-3 fw-bold" >GO!</p>
                            <img src={homeBtn} className="w-100" alt="button image-wrap"/>
                        </Link>
                    </button>
            </div>

            
        </div>
    )
}


export default HomeSingleMenuItem;
