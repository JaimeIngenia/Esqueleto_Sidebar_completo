import React, { useEffect, useState } from 'react';
import styles from './styles/TemperaturaHumedad.module.css'
import logoTemp from '../../assets/logoTemp.svg'
import axios from 'axios';
// import { Mix } from '@ant-design/plots';
// import { groupBy, get } from '@antv/util';
import { Line } from '@ant-design/charts';
// import 'antd/dist/antd.css';


const TemperaturaHumedadPage = () => {

    //**************************
    // Manejo SensorTemperatura Backend_GetAll
    //*************************

    const [sensorTemperaturas, setSensorTemperaturas] = useState([])

    // const mostrarSensorTemperatura = async () => {
    //     try {
    //       const response = await axios.get("https://localhost:7094/api/SensorTemperatura/GetAllSensorTemperatura");
    //       console.log(JSON.stringify(response.data, null, 2));
    //       setSensorTemperaturas(response.data);
    //       console.log(sensorTemperaturas);
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   }
    const mostrarSensorTemperatura = async () => {
      try {
        const response = await axios.get("https://localhost:7094/api/SensorTemperatura/GetAllSensorTemperatura");
    
        // Convertir valorTemperatura a entero y createdAt a objetos Date
        const sensorTemperaturasTransformado = response.data.map(sensor => ({
          idTemperatura: sensor.idTemperatura,
          createdAt: new Date(sensor.createdAt),
          valorTemperatura: parseInt(sensor.valorTemperatura),
          idJardin: sensor.idJardin,
          oJardin: sensor.oJardin
        }));
    
        console.log(JSON.stringify(sensorTemperaturasTransformado, null, 2));
        setSensorTemperaturas(sensorTemperaturasTransformado);
        console.log(sensorTemperaturasTransformado);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    
    useEffect(() => {

        mostrarSensorTemperatura();
  
    }, [])
    
    //**************************
    // Chart
    //*************************

    // const [data, setData] = useState({});

    // useEffect(() => {
    //   asyncFetch();
    // }, []);
  
    // const asyncFetch = () => {
    //   fetch('https://gw.alipayobjects.com/os/antfincdn/HkxWvFrZuC/association-data.json')
    //     .then((response) => response.json())
    //     .then((json) => setData(json))
    //     .catch((error) => {
    //       console.log('fetch data failed', error);
    //     });
    // };

    // function getDataByArea(area) {
    //     return get(groupBy(data.line, 'area'), area, []).map((d) => ({
    //       time: d.time,
    //       value: Math.random() * d.value,
    //       area,
    //     }));
    //   }
    //   if (!Object.keys(data).length) {
    //     return null;
    //   }
    //   const config = {
    //     // 关闭 chart 上的 tooltip，子 view 开启 tooltip
    //     tooltip: false,
    //     plots: [
    //       {
    //         type: 'line',
    //         region: {
    //           start: {
    //             x: 0,
    //             y: 0,
    //           },
    //           end: {
    //             x: 1,
    //             y: 0.3,
    //           },
    //         },
    //         options: {
    //           data: data.line,
    //           xField: 'time',
    //           yField: 'value',
    //           seriesField: 'area',
    //           point: {
    //             style: {
    //               r: 2.5,
    //             },
    //           },
    //           meta: {
    //             time: {
    //               range: [0, 1],
    //             },
    //           },
    //           interactions: [
    //             {
    //               type: 'association-active',
    //             },
    //             {
    //               type: 'association-highlight',
    //             },
    //           ],
    //         },
    //       },
    //       {
    //         type: 'line',
    //         region: {
    //           start: {
    //             x: 0,
    //             y: 0.32,
    //           },
    //           end: {
    //             x: 0.5,
    //             y: 0.65,
    //           },
    //         },
    //         options: {
    //           data: getDataByArea('华东'),
    //           xField: 'time',
    //           yField: 'value',
    //           seriesField: 'area',
    //           interactions: [
    //             {
    //               type: 'association-highlight',
    //             },
    //           ],
    //           point: {
    //             style: {
    //               r: 2.5,
    //             },
    //             state: {
    //               active: {
    //                 style: {
    //                   lineWidth: 1,
    //                   r: 3,
    //                 },
    //               },
    //             },
    //           },
    //           meta: {
    //             time: {
    //               range: [0, 1],
    //             },
    //           },
    //           smooth: true,
    //           tooltip: {
    //             showCrosshairs: true,
    //             shared: true,
    //           },
    //           state: {
    //             active: {
    //               style: {
    //                 lineWidth: 3,
    //               },
    //             },
    //           },
    //         },
    //       },
    //       {
    //         type: 'line',
    //         region: {
    //           start: {
    //             x: 0.5,
    //             y: 0.32,
    //           },
    //           end: {
    //             x: 1,
    //             y: 0.65,
    //           },
    //         },
    //         options: {
    //           data: getDataByArea('华北'),
    //           xField: 'time',
    //           yField: 'value',
    //           seriesField: 'area',
    //           interactions: [
    //             {
    //               type: 'association-highlight',
    //             },
    //           ],
    //           point: {
    //             style: {
    //               r: 2.5,
    //             },
    //           },
    //           meta: {
    //             time: {
    //               range: [0, 1],
    //             },
    //           },
    //           smooth: true,
    //           tooltip: {
    //             showCrosshairs: true,
    //             shared: true,
    //           },
    //         },
    //       },
    //       {
    //         type: 'line',
    //         region: {
    //           start: {
    //             x: 0,
    //             y: 0.67,
    //           },
    //           end: {
    //             x: 0.5,
    //             y: 1,
    //           },
    //         },
    //         options: {
    //           data: getDataByArea('中南'),
    //           xField: 'time',
    //           yField: 'value',
    //           seriesField: 'area',
    //           interactions: [
    //             {
    //               type: 'association-highlight',
    //             },
    //           ],
    //           point: {
    //             style: {
    //               r: 2.5,
    //             },
    //           },
    //           meta: {
    //             time: {
    //               range: [0, 1],
    //             },
    //           },
    //           smooth: true,
    //           tooltip: {
    //             showCrosshairs: true,
    //             shared: true,
    //           },
    //         },
    //       },
    //       {
    //         type: 'line',
    //         region: {
    //           start: {
    //             x: 0.5,
    //             y: 0.67,
    //           },
    //           end: {
    //             x: 1,
    //             y: 1,
    //           },
    //         },
    //         options: {
    //           data: getDataByArea('西南'),
    //           xField: 'time',
    //           yField: 'value',
    //           seriesField: 'area',
    //           interactions: [
    //             {
    //               type: 'association-highlight',
    //             },
    //           ],
    //           point: {
    //             style: {
    //               r: 2.5,
    //             },
    //           },
    //           meta: {
    //             time: {
    //               range: [0, 1],
    //             },
    //           },
    //           smooth: true,
    //           tooltip: {
    //             showCrosshairs: true,
    //             shared: true,
    //           },
    //         },
    //       },
    //     ],
    //   };

    //**************************
    // Chart Prueba 
    //*************************
    const data2 = [

      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
    
    ];
    
    // const config2 = {
    //   data: data2, // Change data2 to data
    //   title: {
    //     visible: true,
    //     text: "Jaime el crack",
    //     size: 5,
    //   },
    //   xField: 'year',
    //   yField: 'value', // Change yfield to yField
    //   color: 'blue',
    //   point: {
    //     visible: true,
    //     size: 5,
    //     shape: 'diamond',
    //     style: {
    //       fill: 'white',
    //       stroke: '#2593fc',
    //       lineWidth: 2,
    //     },
    //   },
    // };
    const config2 = {
      style: {height: 'auto'},
      data: sensorTemperaturas, // Change data2 to data
      title: {
        visible: true,
        text: "Jaime el crack",
        size: 5,
      },
      xField: 'createdAt',
      yField: 'valorTemperatura', // Change yfield to yField
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
        <div className={styles.container__temperatura__humedad}>
            <div className={styles.header__imagen}>
            </div>

            <div className={styles.container__titulo}>
                <h4>Temperatura y Humedad</h4>

            </div>
            <div className={styles.container__icon__data}>
                <div className={styles.container__icon__data__izq}>
                    <img src={logoTemp} alt="" />
                </div>
                <div className={styles.container__icon__data__der}>
{/* 
                  <Line 
                    {...config2} 
                    style={{ 
                      border: 'solid red 10px!important',
                      width: '100%!important' 
                    }} 
                  /> */}
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

export default TemperaturaHumedadPage;
