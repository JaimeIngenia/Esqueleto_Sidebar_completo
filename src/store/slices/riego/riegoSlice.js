import { createSlice } from '@reduxjs/toolkit';

export const riegoSlice = createSlice({
		name: 'riego',
		initialState: {
				ultimoRiego: [],
				isLoadingUltimoRiego: false,
				sensorDataRiegos:[],
				isLoadingSensorDataRiegos: false,
		},
		reducers: {
				startLoadingUltimoRiego: (state, /* action */ ) => {
						state.isLoadingUltimoRiego = true;
				},
                setUltimoRiego: (state, action) =>{
                    console.log(action);
					state.ultimoRiego = action.payload.ultimoRiego;
					state.isLoadingUltimoRiego = false;
                },
				startLoadingSensorDataRiegos: (state, /* action */ ) => {
					state.isLoadingSensorDataRiegos = true;
				},
				setSensorDataRiegos: (state, action) =>{
					state.sensorDataRiegos = action.payload.sensorDataRiegos;
					state.isLoadingSensorDataRiegos = false;
				}
		}
});


export const { startLoadingUltimoRiego , setUltimoRiego, startLoadingSensorDataRiegos,setSensorDataRiegos } = riegoSlice.actions;