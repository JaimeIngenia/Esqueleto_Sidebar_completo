import React, { useEffect, useState } from 'react';
import styles from './styles/HomePage.module.css'
import plantaHome from '../../assets/plantaHome.svg'
import iconos from '../../assets/iconos.svg'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUltimasTemperaturasThunks } from '../../store/slices/temperatura';
import { getUltimashumedadesThunks } from '../../store/slices/humedad/thunks';
import { getUltimoRiegoThunks } from '../../store/slices/riego';
import { CarryOutOutlined } from '@ant-design/icons';
import {  Switch } from 'antd';


const HomePage = () => {

  const [showIcon, setShowIcon] = useState(false);

    //******** Paso 6 traer data de temperatura con redux*/
    const dispatch = useDispatch();


    const {  ultimasTemperaturas = [], isLoadingUltimasTemperaturas } = useSelector( state => state.temperaturas );


    useEffect( ()=> {

			dispatch( getUltimasTemperaturasThunks()  ); // Del archivo "Thunks"

}, [] )
    console.log("Jaime mira las temperaturas");
    console.log(ultimasTemperaturas);

        //******** Paso 6 traer data de ultimas Humedades con redux*/


        const {  ultimasHumedades = [], isLoadingUltimasHumedades } = useSelector( state => state.humedades );
    
    
        useEffect( ()=> {
    
          dispatch( getUltimashumedadesThunks()  ); // Del archivo "Thunks"
    
    }, [] )
        console.log("Jaime mira las humedades");
        console.log(ultimasHumedades);

        //******** Paso 6 traer data de ultimos riegos con redux*/


        const {  ultimoRiego = [], isLoadingUltimoRiego } = useSelector( state => state.riegos );
    
    
        useEffect( ()=> {
    
          dispatch( getUltimoRiegoThunks()  ); // Del archivo "Thunks"
    
    }, [] )
        console.log("Jaime mira las humedades");
        console.log(ultimasHumedades);




    //******** Paso 6 traer data de temperatura */

    const [temperatura, setTemperatura] = useState([])

    const mostrarTemperatura = async () => {
      try {
        const responseAngela = await axios.get("https://localhost:7094/api/SensorTemperatura/GetLastSensorTemperatura");
        console.log("Mensajito nuevo");
        console.log(JSON.stringify(responseAngela.data, null, 2));
        setTemperatura(responseAngela.data);
        // console.log(jardines);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    useEffect(() => {

      // mostrarTemperatura();

    }, [])

    return (
        <div className={styles.contenedor__home__page}>
            {/* <h1>Hola soy home page!</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odio voluptatum deserunt culpa vitae eum itaque doloremque sequi totam, ut dolores distinctio officiis nesciunt assumenda. Voluptatum dolores nesciunt cupiditate debitis! */}
            <div className={styles.planta__superior} >
                <img src={plantaHome} alt="" />
                <div className={styles.texto__planta} >
{/* 
                        <span>Loading T: { isLoadingUltimasTemperaturas ? 'True Temperaturas': 'False Temperaturas' }</span>
                        <span>Loading H: { isLoadingUltimasHumedades ? 'True Huemdades': 'False Huemdades' }</span>
                        <span>Loading R: { isLoadingUltimoRiego ? 'True Riegos': 'False Riegos' }</span> */}

                        <h4> {`Temperatura : ${ultimasTemperaturas.valorTemperatura} °C`} </h4>
                        <h4> {`Humedad : ${ultimasHumedades.valorHumedad} %`} </h4>
                        <h4> {`Tiempo Ultimo Riego : ${ultimoRiego.tiempoRiego} `} </h4>


                </div>
            </div>

            <div className={styles.planta__media} >
                <h4>Estado ON</h4>
                <Switch
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  checked={showIcon}
                  onChange={() => setShowIcon(!showIcon)}
                />
            </div>

            <div className={styles.planta__baja} >
                <img src={iconos} alt="" />
            </div>
        </div>
    );
}

export default HomePage;
