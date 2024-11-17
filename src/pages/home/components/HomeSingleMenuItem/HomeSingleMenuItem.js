import React, { useEffect, useRef, useState } from "react";
import styles from './HomeSingleMenuItem.module.css'
import fica from '../../../../assets/pokedex.webp';
import fica2 from '../../../../assets/pngwing.com.webp'
import ring from '../../../../assets/ring.png';
import homeBtn from '../../../../assets/homeButton.png'
import trainer from '../../../../assets/pokemon-trainer.webp'
import charizard from '../../../../assets/Charizard.png'
import customBox from '../../../../assets/Progetto senza titolo (7)-Photoroom.webp';
import { Link } from "react-router-dom";

const HomeSingleMenuItem = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const scrollDivRef = useRef(null);
    const scroller = useRef(null);
    const homeContents = [
        {
            bg: fica,
            nameSection: 'POKEDEX',
            path: '/pokedex'
        },
        {
            bg: charizard,
            nameSection: 'TEAM',
            path: '/team'
        },
        {
            bg: fica2,
            nameSection: 'BOX',
            path: '/box'
        },
        {
            bg: trainer,
            nameSection: 'CATCH POKEMON',
            path: '/pkmnCatchArea'
        },
    ]

    useEffect(() =>{
        scrollDivRef.current.addEventListener('wheel', switchContent)

    }, [])

    const switchContent = (e) => {
        const delta = e.deltaY
        if(!scroller.current) {
            scroller.current = setTimeout(() => {
                scroller.current = null
                delta > 0? 
                setScrollIndex(prevState => (prevState +1) % homeContents.length)
                :
                setScrollIndex(prevState => prevState > 0? prevState -1 : homeContents.length-1)
            }, 500)
        }
    }

    return (
        <div ref={scrollDivRef} className={`${styles.scrollHomeMenu} no-bar w-100  text-light overflow-scroll d-flex align-items-center justify-content-between`}>   
            <div className="position-relative mb-5">
                <div className={`${styles.ring}`} ><img src={ring} style={{width: '500px', height: '500px'}} alt="ring-image" /></div>
                <img className="position-absolute" src={homeContents[scrollIndex].bg} style={{left: '18%', top: '8%',  maxWidth: '350px',maxHeight: '350px'}} alt="icon home menù"/>
            </div>
        
            <div className={`${styles.contentInfoBox} position-relative p-2 text-dark`}>
                <img src={customBox} />
                <div className=" position-absolute d-flex flex-column "  style={{left: '10%', top: '10%'}}>
                    <h1 className="custom-text-shadow ">{homeContents[scrollIndex]?.nameSection}</h1>
                    <p className="custom-text-shadow p-3 rounded">lorem ipsum dolor sit amet caz d cul osajdosfdjkwerofjrewojfreofreofjreofjreofj5rojferojforejfoerjfojojefrojrfefreopjrfedoeprfojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
                </div>
            </div>

            <button className="btn position-relative align-self-end me-5 mb-5">
                        <Link to={homeContents[scrollIndex].path} >
                            <h2 className="position-absolute  fs-1 fw-bold" style={{left: '50%', top: '30%'}}>GO!</h2>
                            <img src={homeBtn} className="" alt="button image-wrap"/>
                        </Link>
                    </button>
        </div>
    )
}


export default HomeSingleMenuItem;