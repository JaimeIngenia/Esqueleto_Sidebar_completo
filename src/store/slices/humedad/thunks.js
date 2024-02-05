//https://localhost:7094/api/SensorHumedad/GetLastSensorHumedad
import { humedadApi } from "../../../api/humedadApi";
import { startLoadingUltimasHumedades, setUltimasHumedades,startLoadingSensorDataHumedades,setSensorDataHumeades } from "./humedadSlice";


export const getUltimashumedadesThunks = (  ) => {

    return async ( dispatch , getState ) => {

                dispatch ( startLoadingUltimasHumedades() ); 

                // TODO: realizar petición http
                // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)

                // const data = await resp.json();

                // console.log(data);

                const { data } = await humedadApi.get(`/GetLastSensorHumedad`);

                console.log("Jaime estamos en thunks humedades");

                console.log( data );
                
                dispatch ( setUltimasHumedades( { ultimasHumedades: data } ) ); 
    }

}

export const getSensorDataHumedadesThunks = (  ) => {

    return async ( dispatch , getState ) => {

                dispatch ( startLoadingSensorDataHumedades() ); 

                // TODO: realizar petición http
                // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)

                // const data = await resp.json();

                // console.log(data);

                const { data } = await humedadApi.get(`/GetAllSensorHumedad`);

                console.log("Jaime estamos en thunks");

                console.log( data );
                
                dispatch ( setSensorDataHumeades( { sensorDataHumedades: data } ) ); 
    }

}