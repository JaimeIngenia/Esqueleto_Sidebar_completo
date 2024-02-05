import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsThunks } from './store/slices/pokemon';

const PokemonApp = () => {


    const dispatch = useDispatch();

    const { page, pokemons = [], isLoading } = useSelector( state => state.pokemons );

    useEffect( ()=> {

        dispatch( getPokemonsThunks()  ); // Del archivo "Thunks"

    }, [] )



    return (
        <>
            <div style={{width: '100%'}}>

                <h1>PokemonApp</h1>
                <hr/>
                <span>Loading: { isLoading ? 'True': 'False' }</span>

                <ul>
                { pokemons.map( ( {name} ) =>( 

                    <li key={name} >{ name }</li>

                ) ) }           
                </ul>

                <button
                    disabled = {isLoading}
                    onClick={ () => dispatch(  getPokemonsThunks(page) )}
                >
                    Paginacion next

                </button>
            </div>
        </>
    );
}

export default PokemonApp;
