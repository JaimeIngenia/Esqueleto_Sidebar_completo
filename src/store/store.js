import { configureStore } from "@reduxjs/toolkit";
//reducers
import { counterSlice } from "./slices/counter";
import { authotizedSlice } from './slices/authorized'
import { pokemonSlice } from "./slices/pokemon";
import { temperaturaSlice } from "./slices/temperatura";
import { humedadSlice } from "./slices/humedad";
import { riegoSlice } from "./slices/riego";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authorized: authotizedSlice.reducer,
    pokemons: pokemonSlice.reducer,
    temperaturas: temperaturaSlice.reducer,
    humedades: humedadSlice.reducer,
    riegos: riegoSlice.reducer
  },
});

