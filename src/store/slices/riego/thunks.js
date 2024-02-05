////https://localhost:7094/api/SensorRiego/GetLastSensorRiego
import { startLoadingUltimoRiego, setUltimoRiego, startLoadingSensorDataRiegos, setSensorDataRiegos } from "./riegoSlice";
import {riegoApi} from '../../../api/riegoApi'
export const getUltimoRiegoThunks = (  ) => {

    return async ( dispatch , getState ) => {

                dispatch ( startLoadingUltimoRiego() ); 

                // TODO: realizar petición http
                // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)

                // const data = await resp.json();

                // console.log(data);

                const { data } = await riegoApi.get(`/GetLastSensorRiego`);

                console.log("Jaime estamos en thunks riegos");

                console.log( data );
                
                dispatch ( setUltimoRiego( { ultimoRiego: data } ) ); 
    }

}


export const getSensorDataRiegosThunks = (  ) => {

    return async ( dispatch , getState ) => {

                dispatch ( startLoadingSensorDataRiegos() ); 

                // TODO: realizar petición http
                // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)

                // const data = await resp.json();

                // console.log(data);

                const { data } = await riegoApi.get(`/GetAllSensorRiego`);

                console.log("Jaime estamos en thunks");

                console.log( data );
                
                dispatch ( setSensorDataRiegos( { sensorDataRiegos: data } ) ); 
    }

}