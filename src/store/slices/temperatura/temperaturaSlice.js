import { createSlice } from '@reduxjs/toolkit';

export const temperaturaSlice = createSlice({
		name: 'temperatura',
		initialState: {
				ultimasTemperaturas: [],
				isLoadingUltimasTemperaturas: false,
				sensorDataTemperaturas:[],
				isLoadingSensorDataTemperaturas: false,

		},
		reducers: {
				startLoadingUltimasTemperaturas: (state, /* action */ ) => {
						state.isLoadingUltimasTemperaturas = true;
				},
                setUltimasTemperaturas: (state, action) =>{
					console.log("jAIME ES MI NOMNRE/*/*/*");
                    console.log(action);
					state.ultimasTemperaturas = action.payload.ultimasTemperaturas;
					state.isLoadingUltimasTemperaturas = false;
                },
				startLoadingSensorDataTemperaturas: (state, /* action */ ) => {
					state.isLoadingSensorDataTemperaturas = true;
				},
				setSensorDataTemperaturas: (state, action) =>{
					state.sensorDataTemperaturas = action.payload.sensorDataTemperaturas;
					state.isLoadingSensorDataTemperaturas = false;
				}
		}
});


export const { startLoadingUltimasTemperaturas , setUltimasTemperaturas ,startLoadingSensorDataTemperaturas, setSensorDataTemperaturas} = temperaturaSlice.actions;