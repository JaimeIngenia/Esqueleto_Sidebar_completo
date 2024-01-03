import React, { useEffect, useState } from 'react';
import styles from './styles/RiegoPage.module.css'
import logoRiego from '../../assets/logoRiego.svg'
import axios from 'axios';
import { Line } from '@ant-design/charts';
import Plot from 'react-plotly.js';


const RiegoPage = () => {

    //**************************
    // Manejo sensorRiegos Backend_GetAll
    //*************************

    const [sensorRiegos, setSensorRiegos] = useState([])

    const mostrarSensorRiegos = async () => {
        try {
          const response = await axios.get("https://localhost:7094/api/SensorRiego/GetAllSensorRiego");
      
          const sensorRiegosTransformado = response.data.map(sensor => ({
            idRiego: sensor.idRiego,
            createdAt: new Date(sensor.createdAt),
            finalicedAt: new Date(sensor.finalicedAt),
            valorEncendido: parseInt(sensor.valorEncendido),
            valorApagado: parseInt(sensor.valorApagado),
            tiempoRiego: parseInt(sensor.tiempoRiego),
            idJardin: sensor.idJardin,
            oJardin: sensor.oJardin
          }));
      
          console.log(JSON.stringify(sensorRiegosTransformado, null, 2));
          setSensorRiegos(sensorRiegosTransformado);
          // console.log(sensorRiegosTransformado);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    useEffect(() => {

        mostrarSensorRiegos();
  
    }, [])

    //**************************
    // Chart indicator
    //*************************



    const data = [
      {
        type: "indicator",
        value: 200,
        delta: { reference: 160 },
        gauge: { axis: { visible: false, range: [0, 250] } },
        domain: { row: 0, column: 0 }
      },
  
    ];
  
    const layout = {
      width: 600,
      height: 400,
      margin: { t: 25, b: 25, l: 25, r: 25 },
      grid: { rows: 2, columns: 2, pattern: "independent" },
      template: {
        data: {
          indicator: [
            {
              title: { text: "Tiempo de riego" },
              mode: "number+delta+gauge",
              delta: { reference: 90 }
            }
          ]
        }
      }
    };


    return (
        <div className={styles.container__riego} >
                
                <div className={styles.header__imagen}> </div>

                <div className={styles.container__titulo}>
                    <h4>Riegos por dia</h4>
                </div>

                <div className={styles.container__icon__data}>

                    <div className={styles.container__icon__data__izq}>
                        <img src={logoRiego} alt="" />
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

                                    <Plot
                                            data={[
                                              {
                                                x: [1, 2, 3],
                                                y: [2, 6, 3],
                                                type: 'scatter',
                                                mode: 'lines+markers',
                                                marker: {color: 'red'},
                                              },
                                              {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                                            ]}
                                            layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
                                          />  

                                    <Plot
                                      data={data}
                                      layout={layout}
                                    />
                                    
                                </div>
                            </div>
                        
                    </div>

                </div>
        </div>
    );
}

export default RiegoPage;
