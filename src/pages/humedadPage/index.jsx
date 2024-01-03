import React, { useEffect, useState } from 'react';
import styles from './styles/HumedadPage.module.css'
import logoHumedad from '../../assets/logoHumedad.svg'
import axios from 'axios';
import { Line } from '@ant-design/charts';

const HumedadPage = () => {

    //**************************
    // Manejo sensorHumedades Backend_GetAll
    //*************************

    const [sensorHumedades, setSensorHumedades] = useState([])

    // const mostrarSensorHumedad = async () => {
    //     try {
    //         const response = await axios.get("https://localhost:7094/api/SensorHumedad/GetAllSensorHumedad");
    //         console.log(JSON.stringify(response.data, null, 2));
    //         setSensorHumedades(response.data);
    //         // console.log(sensorHumedades);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }
    const mostrarSensorHumedad = async () => {
        try {
          const response = await axios.get("https://localhost:7094/api/SensorHumedad/GetAllSensorHumedad");
      
          // Convertir valorTemperatura a entero y createdAt a objetos Date
          const sensorHumedadesTransformado = response.data.map(sensor => ({
            idHumedad: sensor.idHumedad,
            createdAt: new Date(sensor.createdAt),
            valorHumedad: parseInt(sensor.valorHumedad),
            idJardin: sensor.idJardin,
            oJardin: sensor.oJardin
          }));
      
        //   console.log(JSON.stringify(sensorHumedadesTransformado, null, 2));
          setSensorHumedades(sensorHumedadesTransformado);
          // console.log(sensorHumedadesTransformado);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    useEffect(() => {

        mostrarSensorHumedad();
  
    }, [])

    //**************************
    // Chart
    //*************************

    const config2 = {
        style: {height: 'auto'},
        data: sensorHumedades, // Change data2 to data
        title: {
          visible: true,
          text: "Jaime el crack",
          size: 5,
        },
        xField: 'createdAt',
        yField: 'valorHumedad', // Change yfield to yField
        color: 'blue',
        point: {
          visible: true,
          size: 5,
          shape: 'diamond',
          style: {
            fill: 'white',
            stroke: '#2593fc',
            lineWidth: 2,
          },
        },
      };



    return (
        <>
            <div className={styles.containner__humedad}>
                
                <div className={styles.header__imagen}> </div>
                
                <div className={styles.container__titulo}>
                    <h4>Humedad Terra</h4>
                </div>

                <div className={styles.container__icon__data}>

                    <div className={styles.container__icon__data__izq}>
                        <img src={logoHumedad} alt="" />
                    </div>

                    <div className={styles.container__icon__data__der}>

                        <div style={{ 
                            // border: 'solid red 10px', 
                            position: 'relative', 
                            width: '100%', 
                            height: '60vh'
                            }}>
                            <div style={{ 
                                    position: 'absolute' ,
                                    // border: 'solid red 10px', 
                                    width: '100%',
                                    height: '60vh' 
                                }}>

                                <Line {...config2} />
                                
                            </div>
                        </div>
                        
                        
                    </div>

                </div>


            </div>
        </>
    );
}

export default HumedadPage;
