import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonNameList } from "../../services/pokemon.service";
import { fetchData } from "../../redux/thunk";
import CustomBtn from "../../components/custom-btn/CustomBtn";
import IconBoxMenu from "../../components/iconboxmenu/IconBoxMenu";

const Home = () => {

    const dispatch = useDispatch();
    const pokemonData = useSelector(state => state.fetch.data)
    useEffect(() => {
        preventFetchDataIfTheyreAlreadyStored()
    }, [])

    const preventFetchDataIfTheyreAlreadyStored = () => {
        const persistedDataResult =  JSON.parse(JSON.parse(localStorage.getItem('persist:root')).fetch).data.results;
        console.log(persistedDataResult)
        if(!persistedDataResult || (Array.isArray(persistedDataResult) && persistedDataResult.length <= 0)) dispatch(fetchData(getAllPokemonNameList()))
    }

    return (
       
        <div className="container-fluid  position-relative p-5">
            <div className="row gap-5 justify-content-between">
                <IconBoxMenu iconName={'pokedex'} classes={'bg-dark d-flex flex-column align-items-center justify-content-center p-5 rounded gap-5 col-10 offset-1 offset-sm-0 col-sm-3'} pathLink={'pokedex'} btnLabel={'Pokedex'} dimension={{width: '10rem', height: '10rem'}}/>

                <IconBoxMenu iconName={'pokeball-transparent-bg'} classes={'bg-dark d-flex flex-column align-items-center justify-content-center p-5 rounded gap-5 col-10 offset-1 offset-sm-0 col-sm-3'} pathLink={'team'} btnLabel={'Team'} dimension={{width: '10rem', height: '10rem'}}/>

                <IconBoxMenu iconName={'pngwing.com'} classes={'bg-dark d-flex flex-column align-items-center justify-content-center p-5 rounded gap-5 col-10 offset-1 offset-sm-0 col-sm-3'} pathLink={'box'} btnLabel={'Box Pokemon'} dimension={{width: '10rem', height: '10rem'}}/>

                <IconBoxMenu iconName={'rosso'} classes={'bg-dark d-flex flex-column align-items-center justify-content-center p-5 rounded gap-5 col-10 offset-1 offset-sm-0 col-sm-3'} pathLink={'pkmnCatchArea'} btnLabel={'Catch Pokemon!'} dimension={{width: '10rem', height: '10rem'}}>
                    <CustomBtn label="Catch Pokemon!" pathLink={'pkmnCatchArea'} />
                </IconBoxMenu>
            </div>
           
        </div>
    )
}

export default Home; 