import { temperaturaApi } from "../../../api/temperaturaApi";
import { setUltimasTemperaturas, startLoadingUltimasTemperaturas,startLoadingSensorDataTemperaturas,setSensorDataTemperaturas } from "./temperaturaSlice";
import axios from 'axios'

export const getUltimasTemperaturasThunks = (  ) => {

    return async ( dispatch , getState ) => {

                dispatch ( startLoadingUltimasTemperaturas() ); 

                // TODO: realizar petición http
                // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)

                // const data = await resp.json();

                // console.log(data);

                const { data } = await temperaturaApi.get(`/GetLastSensorTemperatura`);

                console.log("Jaime estamos en thunks");

                console.log( data );
                
                dispatch ( setUltimasTemperaturas( { ultimasTemperaturas: data } ) ); 
    }

}


export const getSensorDataTemperaturasThunks = (  ) => {

    return async ( dispatch , getState ) => {

                dispatch ( startLoadingSensorDataTemperaturas() ); 

                // TODO: realizar petición http
                // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)

                // const data = await resp.json();

                // console.log(data);

                const { data } = await temperaturaApi.get(`/GetAllSensorTemperatura`);

                console.log("Jaime estamos en thunks");

                console.log( data );
                
                dispatch ( setSensorDataTemperaturas( { sensorDataTemperaturas: data } ) ); 
    }

}