import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyContext } from "../../context";
import { getAllPokemonNameList, getSinglePokemonInformation } from "../../services/pokemon.service";
import { fetchData } from "../../redux/thunk";
import CustomBtn from "../../components/custom-btn/CustomBtn";
import IconBoxMenu from "../../components/iconboxmenu/IconBoxMenu";
import CatchPkmn from "./components/catchPokemon/CatchPkmn";

const Home = () => {

    const dispatch = useDispatch();
    const [showCatch, updateShowCatch] = useState(false);
    const [catchedPokemon, updateCatchedPokemon] = useState({})
    const pokemonData = useSelector(state => state.fetch.data)
    const { value, setValue } = useContext(MyContext);
    useEffect(() => {
        preventFetchDataIfTheyreAlreadyStored()
    }, [])

    const preventFetchDataIfTheyreAlreadyStored = () => {
        const persistedDataResult =  JSON.parse(JSON.parse(localStorage.getItem('persist:root')).fetch).data.results;
        if(!persistedDataResult || Array.isArray(persistedDataResult) && persistedDataResult.length <= 0) dispatch(fetchData(getAllPokemonNameList()))
    }

    const  catchPokemon = async () => {
        const AllPokemon = pokemonData
        updateCatchedPokemon(await getRandomPkmn(AllPokemon))
        if(catchedPokemon) {
            updateShowCatch(true)
        }
    }

    const getRandomPkmn = (pokemonsArray) => {
        const rndmNumber = Math.floor(Math.random() * 1000)
        return getSinglePokemonInformation(pokemonsArray.results[rndmNumber].url)
    }

    return (
       
        <div className="container-fluid  position-relative p-5">
            <div className="row gap-5 justify-content-between">
                <IconBoxMenu iconName={'pokedex'} classes={'bg-dark d-flex flex-column align-items-center justify-content-center p-5 rounded gap-5 col-10 offset-1 offset-sm-0 col-sm-3'} pathLink={'pokedex'} btnLabel={'Pokedex'} dimension={{width: '10rem', height: '10rem'}}/>

                <IconBoxMenu iconName={'pokeball-transparent-bg'} classes={'bg-dark d-flex flex-column align-items-center justify-content-center p-5 rounded gap-5 col-10 offset-1 offset-sm-0 col-sm-3'} pathLink={'team'} btnLabel={'Team'} dimension={{width: '10rem', height: '10rem'}}/>

                <IconBoxMenu iconName={'pngwing.com'} classes={'bg-dark d-flex flex-column align-items-center justify-content-center p-5 rounded gap-5 col-10 offset-1 offset-sm-0 col-sm-3'} pathLink={'box'} btnLabel={'Box Pokemon'} dimension={{width: '10rem', height: '10rem'}}/>

                <IconBoxMenu iconName={'rosso'} classes={'bg-dark d-flex flex-column align-items-center justify-content-center p-5 rounded gap-5 col-10 offset-1 offset-sm-0 col-sm-3'} pathLink={''} btnLabel={'Catch Pokemon!'} dimension={{width: '10rem', height: '10rem'}}>
                    <CustomBtn label="Catch Pokemon!" conditionToDisableBtn={showCatch} fn={{fn:catchPokemon, parameters: []}} />
                </IconBoxMenu>
            </div>

             {(showCatch && catchedPokemon) && <CatchPkmn catchedPokemon={catchedPokemon} updateShowCatch={updateShowCatch} />}

           
        </div>
    )
}

export default Home; 