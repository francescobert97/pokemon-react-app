
import geison from '../mock-pkmn.json'


export const getAllPokemonNameList = async () => {
	const endpoint = 'pokemon?limit=100000&offset=0'
	console.log('ATTIVAZINE!!')
	const result = await baseApiCall(`https://pokeapi.co/api/v2/${endpoint}`);
	return result

}

export const getSinglePokemonInformation = async (pokemonUrl) => {
	const result = await baseApiCall(pokemonUrl)
	result.uniqueId = Math.floor(Math.random()* 10000) 
	return result

}

export const getSpecificSectionsPkmnInfo = async (url) => {
	const result = await baseApiCall(url)
	return result
}


export const getMockPokemon = () =>{
	geison.uniqueId = Math.floor(Math.random()* 10000) 
	console.log(geison.uniqueId)
	let obj = {...geison}
	return obj
}

const baseApiCall = async (url) => {
	try {
		const response = await fetch(`${url}`);
		const result = await response.json();
		return  result
	} catch (error) {

		console.error(error);
		throw error
	}
}


export default baseApiCall;