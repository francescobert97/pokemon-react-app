import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CustomBtn from "../../components/custom-btn/CustomBtn";
import { useMemoizePkmn } from "../../hooks/useMemoizePkmn/useMemoizePkmn";
import { getSinglePokemonInformation } from "../../services/pokemon.service";
import capitalizeString from "../../utils/capitalizeString/capitalizeString";
import styles from './pokedex.module.css'
import {  useHasUnmounted } from "../../hooks/useHasUnmounted/useHasUnmounted";
import { typeIconImgs } from "../../utils/types-map";
import itemBar from '../../assets/template/item-bar.webp';
import { downloadData } from "../../utils/downloadData/downloadData";
import Spinner from '../../components/spinner/Spinner'
const Pokedex = () => {
   const pokemonData = useSelector(state => state.fetch.data?.results);
   const storedPokemonInformation = useSelector(state => state.pkmnInformation.pkmnInformation);
   const pokemonTypes = typeIconImgs()
   const memoizePkmn = useMemoizePkmn();
    const storePkmnInformation = async (pkmnToStore, type) => {

        if( pkmnToStore?.name && storedPokemonInformation?.name === pkmnToStore?.name) return;
        if(type === 'memoize') {
            const pkmnSelectedInformation = await getSinglePokemonInformation(pkmnToStore.url || pokemonData[0].url);
            const {flavor_text_entries, evolves_from_species} = {...(await downloadSpecificProperties(pkmnSelectedInformation.species.url))}
            const propertiesArray = Object.entries({flavor_text_entries: flavor_text_entries[0].flavor_text, evolves_from_species:( evolves_from_species?.name || 'base')});
            setSpecificProperties(pkmnSelectedInformation, propertiesArray);
            if(pkmnSelectedInformation.types) {pkmnSelectedInformation.types.map(type => {
                type.typeImg = pokemonTypes[type.type.name];
                return type;
             } )}
            memoizePkmn({type: 'memoize', pkmn:pkmnSelectedInformation})
        }
        else {
            memoizePkmn({type:'delete'})
        }
    }

    const downloadSpecificProperties = async (propertiesUrl) => {
       return await downloadData(propertiesUrl);
    }

    const setSpecificProperties = (pkmnSelectedInformation, props) => {

      return  props.map(prop => pkmnSelectedInformation[prop[0]] = prop[1] )
    }

    useHasUnmounted(!storedPokemonInformation.name?{fn:storePkmnInformation, params: [{},'memoize'], isEnabledInMounting: true} : {fn:storePkmnInformation, params:[], isEnabledInMounting: false}, '' )

   return (
        <div className="container-fluid  g-0 d-flex flex-column  align-items-center text-dark">
            <div className="w-100">
                <CustomBtn  classes={'p-2 mt-1 mb-2'} pathLink={'/'}/>
            </div>
           
            <div className={`${styles.pokedex} h-100 w-100 row mt-1`}>
                <div className={`${styles.specific} order-2 no-bar rounded col-12 col-md-2 mx-auto`}>
                    {pokemonData? pokemonData.map(
                        pkmn => <p key={`pkmnData ${Math.random() * 10000}`} className="w-100 fs-5 p-2 position-relative" onClick={()=> storePkmnInformation(pkmn, 'memoize')}>
                            <img src={itemBar} alt="pokemon-single-element-wrapper" />
                            <span className="position-absolute" style={{left: '10%', top: '45%'}}>{capitalizeString(pkmn.name)}</span>
                            </p>         
                    ) : <p>No records found!</p>}
                </div>

                <div className="overflow-hidden bg-light col-12 order-1   mx-auto col-md-8  text-dark d-flex flex-column justify-content-start align-items-center p-3">

                    { storedPokemonInformation.name?
                        <div className="w-100 h-100 d-flex flex-column align-items-center gradient-bg text-light mt-4 rounded" >
                            <h3 className="mt-3">{capitalizeString(storedPokemonInformation.name)}</h3>
                            <img src={storedPokemonInformation.sprites.front_default} alt="Pokemon sprite"  style={{zoom: '200%'}}/>
                           <p>
                           {storedPokemonInformation.flavor_text_entries}
                            </p>
                           <p> {storedPokemonInformation.evolves_from_species || 'none'} </p>
                            <div className="d-flex gap-2">
                                {storedPokemonInformation.types.map(type => 
                                  <img src={type.typeImg} alt='type pkmn'key={type.slot} style={{width:'30px', height: '30px'}}/>
                                )}
                           </div>
                        </div> :
                        <Spinner />
                    }       
                </div>
            </div>
        </div>
    )
}

export default Pokedex;