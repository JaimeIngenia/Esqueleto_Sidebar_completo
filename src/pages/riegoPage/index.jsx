import React, { useEffect, useState } from 'react';
import styles from './styles/RiegoPage.module.css'
import logoRiego from '../../assets/logoRiego.svg'
import axios from 'axios';
import { Line } from '@ant-design/charts';
import Plot from 'react-plotly.js';
import { useDispatch, useSelector } from 'react-redux';
import { getSensorDataRiegosThunks } from '../../store/slices/riego';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { UserOutlined,CalendarOutlined , CarryOutOutlined, ContactsOutlined, ClockCircleOutlined} from '@ant-design/icons';

import { Button, Progress, Spin } from 'antd';
import { Segmented } from 'antd';
import { Column } from '@ant-design/charts';
import styled from 'styled-components';


const StyledColumn = styled(Column)`
  canvas {
    height: 300px !important;
    width: 100% !important;
    //border: solid green 4px;

  }
`;


const RiegoPage = () => {

       //******** Paso 6 traer data de Riegos con redux*/
       const dispatch = useDispatch();


       const {  sensorDataRiegos = [], isLoadingSensorDataRiegos } = useSelector( state => state.riegos );
    
    
       useEffect( ()=> {
    
         dispatch( getSensorDataRiegosThunks()  ); // Del archivo "Thunks"
    
        }, [] )
    
       console.log("Jaime mira las humedades redux");
       console.log(sensorDataRiegos);
    
    

    //**************************
    // Manejo sensorRiegos Backend_GetAll
    //*************************

    const [sensorRiegos, setSensorRiegos] = useState([]);

    const obtenerDatosSensorRiegos = async () => {
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
        setSensorRiegos(sensorRiegosTransformado);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    useEffect(() => {
      obtenerDatosSensorRiegos();
    }, []);
  
    //*************** */ Crear datos para el gráfico
    const data = [
      {
        type: '家具家电',
        sales: 38,
      },
      {
        type: '粮油副食',
        sales: 52,
      },
      {
        type: '生鲜水果',
        sales: 0,
      },
      {
        type: '美容洗护',
        sales: 145,
      },
      {
        type: '母婴用品',
        sales: 48,
      },
      {
        type: '进口食品',
        sales: 38,
      },
      {
        type: '食品饮料',
        sales: 38,
      },
      {
        type: '家庭清洁',
        sales: 38,
      },
    ];
  
    const config = {
      data,
      xField: 'type',
      yField: 'sales',
      label: {
        position: 'top', // Cambiado de 'middle' a 'top'
        style: {
          fill: '#FFFFFF',
          opacity: 0.6,
        },
      },
      meta: {
        type: { alias: '类别' },
        sales: { alias: '销售额' },
      },
    };


    //**************************
    // Chart indicator
    //*************************
    //******************** Señor antd con progress */
    const [percent, setPercent] = useState(0);
    const increase = () => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + 10;
        if (newPercent > 100) {
          return 100;
        }
        return newPercent;
      });
    };
    const decline = () => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent - 10;
        if (newPercent < 0) {
          return 0;
        }
        return newPercent;
      });
    };
    //****************** filtros */

    const [value, setValue] = useState('Map');

    return (
        <div className={styles.container__riego} >
                
                <div className={styles.header__imagen}> </div>

                <div className={styles.container__titulo}>
                    <h4>Riegos por dia</h4>
                </div>

                <div className={styles.container__icon__data}>

                    <div className={styles.container__icon__data__izq}>
                      <div
                        style={{
                          width:'30%',
                          display: 'flex',
                          flexDirection:'column',
                          justifyContent:'space-around',
                          alignItems:'center',
                          height:'40vh',
                          // border: ' dotted 5px green',
                        }}
                      >

                        <img src={logoRiego} alt="" />
                        <Segmented
                              options={[
                                {
                                  label: (
                                    <div
                    
                                    ><CalendarOutlined />
                                      <div>Mes</div>
                                    </div>
                                  ),
                                  value: 'user1',
                                },
                                {
                                  label: (
                                    <div
                    
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
                          <div 
                                    style={{
                                      // border: ' dotted 5px green',
                                      display:'flex',
                                      flexDirection:'row',
                                      justifyContent: 'space-around',
                                      alignItems: 'center',
                                      height: '60vh',
                                      width:'70%'
                                    }}
                                  >
                                    <Spin 
                                          tip="Loading" 
                                          size="large" 
                                          spinning={isLoadingSensorDataRiegos}                               
                                    >
                                          <StyledColumn
                                            {...config}
                                            onReady={(plot) => {
                                              plot.on('plot:click', (evt) => {
                                                const { x, y } = evt;
                                                const { xField } = plot.options;
                                                const tooltipData = plot.chart.getTooltipItems({ x, y });
                                                console.log(tooltipData);
                                              });
                                            }}
                                          />
                                    </Spin>        
                                   
                          </div>
                    </div>

                    <div className={styles.container__icon__data__der}>

                           

                            <div style={{ 
                              // border: '3px solid green', 
                              display: 'flex',
                              flexDirection:'column',
                              justifyContent: 'space-around',
                              alignItems:'center',
                              height:'40vh'
                            }}>

                

                                <div
                                  style={{
                                    marginBottom: 10,
                                    display: 'flex',
                                    flexDirection:'column',
                                    justifyContent: 'space-around',
                                    alignItems:'center',
                                    // border: '3px solid green', 
                                  }}
                                >
                                  <Progress percent={percent} />
                                  <Progress type="circle" percent={percent} />
                                </div>
                                <Button.Group>
                                  <Button onClick={decline} icon={<MinusOutlined />} />
                                  <Button onClick={increase} icon={<PlusOutlined />} />
                                </Button.Group>

                            </div>
                 

                    </div>

                </div>
        </div>
    );
}

export default RiegoPage;
