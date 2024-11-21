import React, { useEffect, useState } from "react";
import CustomBtn from "../../components/custom-btn/CustomBtn";
import { useStoringPkmn } from "../../hooks/useStoringPkmn/useStoringPkmn";
import fieldPoke from '../../assets/field-poke.webp'
import { useSelector } from "react-redux";
import { getSinglePokemonInformation } from "../../services/pokemon.service";
import Spinner from "../../components/spinner/Spinner";

const PkmnCatchArea = () => {
    const teamStore = useSelector(state => state.team.team);
    const pokemonData = useSelector(state => state.fetch.data)
    const [randomPkmn, setRandomPkmn] = useState(null)
    const storingPkmn = useStoringPkmn()
    const sendPokemon = (operation) => {
        if(operation === 'escape' || !operation) {
            return;
        }
        storingPkmn({type:operation, pkmn:randomPkmn})
        
    }
    const getRandomPkmn = async (pokemonsArray) => {
        const rndmNumber = Math.floor(Math.random() * pokemonData.results.length)
        const pokemon = await getSinglePokemonInformation(pokemonsArray.results[rndmNumber].url)
        pokemon.uniqueId = Math.floor(Math.random()* 10000) 
        return pokemon
    }
    const  catchPokemon = async () => {
        const AllPokemon = pokemonData
       setRandomPkmn(await getRandomPkmn(AllPokemon))
    }
    useEffect(() => {
        catchPokemon();
    }, [])
    return (
        <>
        { randomPkmn? <div className=" w-100 h-100 rounded d-flex flex-column justify-content-center align-items-center" style={{background:  `url(${fieldPoke})`, backgroundSize: 'cover'}}>
              <p className="fs-4 bg-light rounded p-2 mt-5">Congratulations! you have got <span className="fw-bold fs-3">{randomPkmn.name}</span></p>
                <img className="h-100 w-100" alt="pokemon sprite" src={randomPkmn.sprites.front_default}  style={{maxWidth: '350px', minHeight: '300px'}}/>

                <div className="d-flex gap-2 mb-5">
                    <CustomBtn label={'Send to Team'} pathLink={'/'} classes={''} conditionToDisableBtn={teamStore.length>=6} fn={{fn:sendPokemon, parameters: ['add-to-team']}}/>
                    <CustomBtn label={'Send to Box'} pathLink={'/'} classes={''}  fn={{fn:sendPokemon, parameters: ['add-to-box']}}/>
                    <CustomBtn label={'Escape'} pathLink={'/'} classes={''}  fn={{fn:sendPokemon, parameters: ['escape']}}/>

                </div>
             </div> : <Spinner />}
        </>
    )
}

export default PkmnCatchArea;