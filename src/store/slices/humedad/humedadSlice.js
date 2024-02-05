import { createSlice } from '@reduxjs/toolkit';

export const humedadSlice = createSlice({
		name: 'humedad',
		initialState: {
				ultimasHumedades: [],
				isLoadingUltimasHumedades: false,
				sensorDataHumedades:[],
				isLoadingSensorDataHumedades: false,
		},
		reducers: {
				startLoadingUltimasHumedades: (state, /* action */ ) => {
						state.isLoadingUltimasHumedades = true;
				},
                setUltimasHumedades: (state, action) =>{
					console.log("jAIME ES MI Humedad/*/*/*");
                    console.log(action);
					state.ultimasHumedades = action.payload.ultimasHumedades;
					state.isLoadingUltimasHumedades = false;
                },
				startLoadingSensorDataHumedades: (state, /* action */ ) => {
					state.isLoadingSensorDataHumedades = true;
				},
				setSensorDataHumeades: (state, action) =>{
					state.sensorDataHumedades = action.payload.sensorDataHumedades;
					state.isLoadingSensorDataHumedades = false;
				}
		}
});


export const { startLoadingUltimasHumedades , setUltimasHumedades ,
	startLoadingSensorDataHumedades, setSensorDataHumeades
} = humedadSlice.actions;