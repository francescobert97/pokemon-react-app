import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/thunk";
import styles from './Home.module.css'
import HomeSingleMenuItem from "./components/HomeSingleMenuItem/HomeSingleMenuItem";
import IconBoxMenu from "../../components/iconboxmenu/IconBoxMenu";


const Home = () => {
    const [scrollIndex, setScrollIndex] = useState(0);

    const homeContents = [
        {
            bg: 'pokedex',
            nameSection: 'POKEDEX',
            description: 'Explore the world of Pokémon! Dive into a complete Pokédex filled with detailed informations and evolutionary lines for every Pokémon.',
            path: '/pokedex'
        },
        {
            bg: 'Charizard',
            nameSection: 'TEAM',
            description: 'Build your ultimate Pokémon dream team! Strategize and assemble the perfect lineup for battles and adventures.',
            path: '/team'
        },
        {
            bg: 'pngwing',
            nameSection: 'BOX',
            description: 'Organize and manage your Pokémon collection. Store, view, and move your Pokémon with ease in the Pokémon Box.',
            path: '/box'
        },
        {
            bg: 'pokemonTrainer',
            nameSection: 'CATCH!',
            description: 'Venture into the wild and catch new Pokémon! Test your skills and expand your roster in the thrilling Capture Zone.',
            path: '/pkmnCatchArea'
        },
    ]
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div className="d-flex flex-column justify-content-center align-items-center gap-5">
            <HomeSingleMenuItem homeContents={homeContents} updateScroll={[scrollIndex, setScrollIndex]}/>
            <div className="d-flex gap-2">
                {
                    homeContents.map( (homeContent,index) => <div key={homeContent.bg} onClick={() => setScrollIndex(index)}><IconBoxMenu dimension={{width:'80px', height:'80px'}} iconName={homeContent.bg} /></div>)
                }
            </div>     
        </div>
    )
}

export default Home; 