import React, { useEffect, useState } from 'react';
import styles from './styles/HumedadPage.module.css'
import logoHumedad from '../../assets/logoHumedad.svg'
import axios from 'axios';
import { Line } from '@ant-design/charts';
import { useDispatch, useSelector } from 'react-redux';
import { getSensorDataHumedadesThunks } from '../../store/slices/humedad/thunks';
import { UserOutlined,CalendarOutlined , CarryOutOutlined, ContactsOutlined, ClockCircleOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import { Segmented ,Spin } from 'antd';

const StyledLine = styled(Line)`
  canvas {
    height: 300px !important;
    width: 100% !important;
    //border: solid green 4px;

  }
`;

const HumedadPage = () => {

     //******** Paso 6 traer data de humedad con redux*/
     const dispatch = useDispatch();


     const {  sensorDataHumedades = [], isLoadingSensorDataHumedades } = useSelector( state => state.humedades );
  
  
     useEffect( ()=> {
  
       dispatch( getSensorDataHumedadesThunks()  ); // Del archivo "Thunks"
  
      }, [] )
  
     console.log("Jaime mira las temperaturasde redux");
     console.log(sensorDataHumedades);
  
  

    //**************************
    // Manejo sensorHumedades Backend_GetAll
    //*************************

    const [sensorHumedades, setSensorHumedades] = useState([])


    // const mostrarSensorHumedad = async () => {
    //     try {
    //       const response = await axios.get("https://localhost:7094/api/SensorHumedad/GetAllSensorHumedad");
      
    //       // Convertir valorTemperatura a entero y createdAt a objetos Date
    //       const sensorHumedadesTransformado = response.data.map(sensor => ({
    //         idHumedad: sensor.idHumedad,
    //         createdAt: new Date(sensor.createdAt),
    //         valorHumedad: parseInt(sensor.valorHumedad),
    //         idJardin: sensor.idJardin,
    //         oJardin: sensor.oJardin
    //       }));
      
    //     //   console.log(JSON.stringify(sensorHumedadesTransformado, null, 2));
    //       setSensorHumedades(sensorHumedadesTransformado);
    //       // console.log(sensorHumedadesTransformado);
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };

    // useEffect(() => {

    //     mostrarSensorHumedad();
  
    // }, [])

    //**************************
    // Chart
    //*************************

    const config2 = {

      
        // annotations: [
        //   // 低于中位数颜色变化
        //   {
        //     type: 'regionFilter',
        //     start: ['min', 'median'],
        //     end: ['max', '0'],
        //     color: '#F4664A',
        //   },
        //   {
        //     type: 'text',
        //     position: ['min', 'median'],
        //     content: '中位数',
        //     offsetY: -4,
        //     style: {
        //       textBaseline: 'bottom',
        //     },
        //   },
        //   {
        //     type: 'line',
        //     start: ['min', 'median'],
        //     end: ['max', 'median'],
        //     style: {
        //       stroke: '#F4664A',
        //       lineDash: [2, 2],
        //     },
        //   },
        // ],


        style: {height: 'auto'},
        data: sensorDataHumedades,//sensorHumedades, // Change data2 to data
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
                    <div 
                              style={{
                                // border: ' dotted 5px green',
                                display:'flex',
                                flexDirection:'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                height: '60vh'
                              }}
                            >
                              <Spin 
                                    tip="Loading" 
                                    size="large" 
                                    spinning={isLoadingSensorDataHumedades}                               
                              >

                                <StyledLine {...config2} />
                                
                                </Spin>
                              <Segmented
                                    // style={{display:'flex', justifyContent:'center', alignItems:'center'}}
                                    options={[
                                      {
                                        label: (
                                          <div
                                            // style={{
                                            //   padding: 4,
                                            //   paddingBottom:'none !important'
                                            // }}
                                          ><CalendarOutlined />
                                            <div>Mes</div>
                                          </div>
                                        ),
                                        value: 'user1',
                                      },
                                      {
                                        label: (
                                          <div
                                            // style={{
                                            //   padding: 4,
                                            // }}
                                          >
                         
                                            <CarryOutOutlined />
                                            <div>Semana</div>
                                          </div>
                                        ),
                                        value: 'user2',
                                      },
                                      {
                                        label: (
                                          <div
                                            // style={{
                                            //   padding: 4,
                                            // }}
                                          >
                     
                                    
                                            <ClockCircleOutlined />
                                            <div>Dia</div>
                                          </div>
                                        ),
                                        value: 'user3',
                                      },
                                    ]}
                                  />
                            </div>
                        
                        
                    </div>

                </div>


            </div>
        </>
    );
}

export default HumedadPage;
