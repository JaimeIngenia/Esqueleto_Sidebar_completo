import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
		name: 'pokemon',
		initialState: {
				page: 0,
				pokemons: [],
				isLoading: false,
		},
		reducers: {
				startLoadingPokemons: (state, /* action */ ) => {
						state.isLoading = true;
				},
                setPokemons: (state, action) =>{
                    console.log(action);
					state.page = action.payload.page;
					state.pokemons = action.payload.pokemons;
					state.isLoading = false;
                }
		}
});


export const { startLoadingPokemons , setPokemons } = pokemonSlice.actions;