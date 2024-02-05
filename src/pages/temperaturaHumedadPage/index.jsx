import React, { useEffect, useState } from 'react';
import styles from './styles/TemperaturaHumedad.module.css'
import logoTemp from '../../assets/logoTemp.svg'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from '@ant-design/charts';
import { getSensorDataTemperaturasThunks } from '../../store/slices/temperatura';
import { Alert, Flex, Spin } from 'antd';
import { UserOutlined,CalendarOutlined , CarryOutOutlined, ContactsOutlined, ClockCircleOutlined} from '@ant-design/icons';
import { Avatar, Segmented } from 'antd';
import styled from 'styled-components';


const StyledLine = styled(Line)`
  canvas {
    height: 300px !important;
    width: 100% !important;
    //border: solid green 4px;

  }
`;

const TemperaturaHumedadPage = () => {


   //******** Paso 6 traer data de temperatura con redux*/
   const dispatch = useDispatch();


   const {  sensorDataTemperaturas = [], isLoadingSensorDataTemperaturas } = useSelector( state => state.temperaturas );


   useEffect( ()=> {

     dispatch( getSensorDataTemperaturasThunks()  ); // Del archivo "Thunks"

    }, [] )

   console.log("Jaime mira las temperaturasde redux");
   console.log(sensorDataTemperaturas);


    //**************************
    // Manejo SensorTemperatura Backend_GetAll
    //*************************

    // const [sensorTemperaturas, setSensorTemperaturas] = useState([])

    // const mostrarSensorTemperatura = async () => {
    //   try {
    //     const response = await axios.get("https://localhost:7094/api/SensorTemperatura/GetAllSensorTemperatura");
    
    //     // Convertir valorTemperatura a entero y createdAt a objetos Date
    //     const sensorTemperaturasTransformado = response.data.map(sensor => ({
    //       idTemperatura: sensor.idTemperatura,
    //       createdAt: new Date(sensor.createdAt),
    //       valorTemperatura: parseInt(sensor.valorTemperatura),
    //       idJardin: sensor.idJardin,
    //       oJardin: sensor.oJardin
    //     }));
    
    //     // console.log(JSON.stringify(sensorTemperaturasTransformado, null, 2));
    //     setSensorTemperaturas(sensorTemperaturasTransformado);
    //     // console.log(sensorTemperaturasTransformado);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };
    
    
    // useEffect(() => {

    //     mostrarSensorTemperatura();
  
    // }, [])
    
    //**************************
    // Chart
    //*************************

    //**************************
    // Chart Prueba 
    //*************************
    // const data2 = [

    //   { year: '1991', value: 3 },
    //   { year: '1992', value: 4 },
    //   { year: '1993', value: 3.5 },
    //   { year: '1994', value: 5 },
    //   { year: '1995', value: 4.9 },
    //   { year: '1996', value: 6 },
    
    // ];
    const config2 = {

      data: sensorDataTemperaturas,
      title: {
        visible: true,
        text: "Jaime el crack",
        size: 0,
        color: 'black'
      },
      xField: 'createdAt',
      yField: 'valorTemperatura',
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
    

    // const config2 = {
    //   style: {
    //     height: 'auto',
        
    //   },
    //   data: sensorDataTemperaturas, // Change data2 to data
    //   title: {
    //     visible: true,
    //     text: "Jaime el crack",
    //     size: 0,
    //     color: 'black'
    //   },
    //   xField: 'createdAt',
    //   yField: 'valorTemperatura', // Change yfield to yField
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
    

    return (
      <>
        {/* <Flex gap="small" vertical style={{width:'100%'}}>
          <Flex gap="small"> */}
            
              
          
          
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


                          {/* parte derecho */}
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
                                    spinning={isLoadingSensorDataTemperaturas}                               
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


                          {/* <div 
                            style={{
                              width:'50%',
                              border: 'solid blue 3px',
                              
                            }}
                          >
                                <Spin 
                                  tip="Loading" 
                                  size="large" 
                                  spinning={isLoadingSensorDataTemperaturas}                               
                                >
                                  <Line {...config2} />
                                  
                                </Spin>

                          </div> */}
                      </div>
                  </div>


          {/* </Flex>
        </Flex> */}


      </>
    );
}

export default TemperaturaHumedadPage;
