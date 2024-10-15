import React from "react";
import { useSelector } from "react-redux";
import CustomBtn from "../../components/custom-btn/CustomBtn";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn";
import { getSinglePokemonInformation } from "../../services/pokemon.service";
import capitalizeString from "../../utils/capitalizeString";
import styles from './pokedex.module.css'
import {  useHasUnmounted } from "../../hooks/useCustomHook";

const Pokedex = () => {
   const pokemonData = useSelector(state => state.fetch.data.results);
   const storedPokemonInformation = useSelector(state => state.pkmnInformation.pkmnInformation);
   

   const memoizePkmn = useMemoizePkmn();
    const storePkmnInformation = async (pkmnToStore, type) => {
        console.log('non mi triggerò')
        if(storedPokemonInformation.name && pkmnToStore && storedPokemonInformation.name === pkmnToStore.name) return;
       

        if(type === 'memoize' && pkmnToStore.url) {
            const pkmnSelectedInformation = await getSinglePokemonInformation(pkmnToStore.url);
            memoizePkmn({type: 'memoize', pkmn:pkmnSelectedInformation})
        }
        else if(type === 'memoize' && !pkmnToStore.url) {
            console.log('METTIAMO BULBASAUR')
            const pkmnSelectedInformation = await getSinglePokemonInformation(pokemonData[0].url);
            memoizePkmn({type: 'memoize', pkmn:pkmnSelectedInformation})
        }
        else {
            memoizePkmn({type:'delete'})
        }
    }
    console.log(storedPokemonInformation.name)
    useHasUnmounted(!storedPokemonInformation.name?{fn:storePkmnInformation, params: [{},'memoize'], isEnabledInMounting: true} : {fn:storePkmnInformation, params:[], isEnabledInMounting: false}, '' )

   return (
        <div className="container-fluid d-flex flex-column  align-items-center text-light">
            <div className="w-100">
                <CustomBtn  classes={'p-2 mt-1 mb-2'} pathLink={'/'}/>
            </div>
           
            <div className={`${styles.pokedex} h-100 w-100 row mt-1`}>
                <div className={`${styles.specific} order-2 bg-light rounded col-12 col-md-7 mx-auto`}>
                    {pokemonData? pokemonData.map(
                        pkmn => <p key={`pkmnData ${Math.random() * 10000}`} className="w-100 bg-dark  p-2" onClick={()=> storePkmnInformation(pkmn, 'memoize')}>{capitalizeString(pkmn.name)}</p>         
                    ) : <p>No records found!</p>}
                </div>

                <div className="bg-light col-12 order-1   mx-auto col-md-3  text-dark d-flex flex-column justify-content-start align-items-center p-3">

                    { storedPokemonInformation.name?
                        <div className="h-100 d-flex flex-column align-items-center bg-dark text-light mt-4 rounded" >
                            <h3 className="mt-3">{capitalizeString(storedPokemonInformation.name)}</h3>
                            <img src={storedPokemonInformation.sprites.front_default} alt="Pokemon sprite"  style={{zoom: '300%'}}/>
                        </div> :
                        <p>No-information</p>
                    }       
                </div>
            </div>
        </div>
    )
}

export default Pokedex;