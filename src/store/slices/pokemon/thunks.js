import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import axios from 'axios'

export const getPokemonsThunks = ( page = 0 ) => {

    return async ( dispatch , getState ) => {

                dispatch ( startLoadingPokemons() ); 

                // TODO: realizar petición http
                // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)

                // const data = await resp.json();

                // console.log(data);

                const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);

                console.log( data );
                
                dispatch ( setPokemons( { pokemons: data.results, page: page +1 } ) ); 
    }

}