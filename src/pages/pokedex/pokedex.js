import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import CustomBtn from "../../components/custom-btn/CustomBtn";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn";
import { getSinglePokemonInformation } from "../../services/pokemon.service";
import capitalizeString from "../../utils/capitalizeString";
import styles from './pokedex.module.css'

const Pokedex = () => {
   const pokemonData = useSelector(state => state.fetch.data.results);
   const storedPokemonInformation = useSelector(state => state.pkmnInformation.pkmnInformation);
   const memoizePkmn = useMemoizePkmn()
    const pkmnStoredReference = useRef(false);
    const prevPkmnUrlStored = useRef('');

    const storePkmnInformation = async (url) => {
        if(prevPkmnUrlStored.current === url) return;
        prevPkmnUrlStored.current = url;
        const pkmnSelectedInformation = await getSinglePokemonInformation(url);
        memoizePkmn({type: 'memoize', pkmn:pkmnSelectedInformation})
    }


    useEffect(() => {

        if(pkmnStoredReference.current){
            storePkmnInformation(pokemonData[0].url)
            prevPkmnUrlStored.current = pokemonData[0].url;

       }

     
        return () => {
            if(pkmnStoredReference.current){
                memoizePkmn({type: 'delete', pkmn:storedPokemonInformation})

            }
            pkmnStoredReference.current = true;

        }
    },[]) 

    
   return (
        <div className="container-fluid d-flex justify-content-center align-items-start text-light">
            <CustomBtn  classes={'p-2 mt-1 mb-2'} pathLink={'/'}/>
            <div className={`${styles.pokedex} h-100 w-100 row`}>
                <div className=" order-2 bg-light rounded col-12 col-md-7 mx-auto">
                    { pokemonData.map(
                        pkmn => <p className="w-100 bg-dark  p-2" onClick={()=> storePkmnInformation(pkmn.url)}>{capitalizeString(pkmn.name)}</p>         
                    )}
                </div>

                <div className="  bg-light col-12 order-1   mx-auto col-md-3  text-dark d-flex flex-column justify-content-start align-items-center">

                    { storedPokemonInformation.name?
                        <div className="h-100 d-flex flex-column align-items-center bg-dark text-light mt-4 rounded" >
                            <h3 className="mt-3">{capitalizeString(storedPokemonInformation.name)}</h3>
                            <img src={storedPokemonInformation.sprites.front_default}  style={{zoom: '300%'}}/>
                        </div> :
                        <p>No-information</p>
                    }       
                </div>
            </div>
        </div>
    )
}

export default Pokedex;