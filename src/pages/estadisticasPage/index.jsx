import React, { useEffect , createRef} from 'react';
import styles from './styles/EstadisticasPage.module.css'
import { useState } from 'react';
import { Button, Space, Table ,Modal, Input,Form, Pagination } from 'antd';
import axios from 'axios';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


const EstadisticasPage = () => {

    //**************************
    // Manejo Jardines Backend
    //*************************

    const [jardines, setJardines] = useState([])

    const mostrarJardines = async () => {
      try {
        const response = await axios.get("https://localhost:7094/api/Jardin/GetAllJardines");
        // console.log(JSON.stringify(response.data, null, 2));
        setJardines(response.data);
        // console.log(jardines);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    useEffect(() => {

      mostrarJardines();

    }, [])

    //******************** Tabla antD */

    //********** fILTRO CAMPO ESPECIFICO */

 
    const onchangeTable=(pagination,filters,sorter,extra) =>{
      console.log('params', pagination,filters,sorter, extra);
    }

    //********** Filtro para buscar:

    const [searchedText, setSearchedText] = useState("")

    const colums = [
      {
        key:'1',
        title:'IdJardin',
        dataIndex:'idJardin',
      },
      {
        key:'2',
        title:'Created_at',
        dataIndex:'createdAt',
        filteredValue: [searchedText],
        onFilter: (value , record) => {
          return (
            
          String(record.createdAt)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.valorSensor)
            .toLowerCase()
            .includes(value.toLowerCase()) || 
          String(record.sensorId)
            .toLowerCase()
            .includes(value.toLowerCase()) 
          )
        }
      },
      {
        key:'3',
        title:'ValorSensor',
        dataIndex:'valorSensor'
      },
      {
        key:'3',
        title:'SensorId',
        dataIndex:'sensorId',
        filters:[
          {
            text:1,
            value:1
          },
          {
            text:2,
            value:2
          },
          {
            text:3,
            value:3
          }
        ]
      },
      {
        key:'4',
        title:'Actions',
        render:(record)=>{
          return <>
            <EditOutlined onClick={()=>{onEditJardin(record)}} />
            <DeleteOutlined onClick={()=> {onDeleteJardin(record)}} style={{ color: "red", marginLeft: 12 }} />
          </>
        }
      }
    ]
    

    //******************** Eliminar

    const onDeleteJardin = (record) => {
      console.log("Record:", record);

      Modal.confirm({
        title: '¿Estás seguro de eliminar?',
        onOk: async () => {
          try {
            if (record.idJardin) { // Asegúrate de usar el nombre correcto de la propiedad
              await eliminarJardin(record.idJardin);
              // Actualiza el estado para reflejar la eliminación
              setJardines((pre) => pre.filter((_jardin) => _jardin.idJardin !== record.idJardin));
            } else {
              console.error("No se puede obtener el ID del jardin a eliminar");
            }
          } catch (error) {
            console.error("Error al eliminar el jardin:", error);
          }
        },
      });
    };

    const eliminarJardin = async (idJardin) => {
      try {
        const response = await fetch(`https://localhost:7094/api/Jardin/EliminarJardin/${idJardin}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        });
    
        if (response.ok) {
          alert("El jardín se ha eliminado correctamente");
          // Puedes realizar acciones adicionales después de la eliminación si es necesario
        } else {
          alert(response.statusText);
        }
      } catch (error) {
        console.error("Error al eliminar el jardín:", error);
      }
    };

    //******************** Editar

    const [isEditing, setIsEditing] = useState(false)
    const [ valueInputEditingJardin, setValueInputEditingJardin ] = useState();

    const handleInputChange = (campo, valor) => {
      setValueInputEditingJardin((prevJardin) => ({
        ...prevJardin,
        [campo]: valor,
      }));
    };
    
    const onEditJardin= (record) => {
      setIsEditing(true)
      setValueInputEditingJardin({...record})
    }

    const resetEditing = () => {
      setIsEditing(false);
      setValueInputEditingJardin(null)
    }

    const actualizarJardin = async (formValues) => {
      try {
        const response = await fetch(`https://localhost:7094/api/Jardin/EditarJardin/${valueInputEditingJardin.idJardin}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            CreatedAt: formValues.createdAt,
            ValorSensor: formValues.valorSensor,
            SensorId: formValues.sensorId,
          })
        });
    
        if (response.ok) {
          setIsEditing(false);
          alert("El jardín se ha actualizado correctamente");
          // Puedes realizar acciones adicionales después de la actualización si es necesario
        } else {
          alert(response.statusText);
        }
      } catch (error) {
        console.error("Error al actualizar el jardin:", error);
      }
    };

    //********************* Agregar Jardpin */

    const formRef = createRef();

    const {Item} = Form;

    const [isSaving, setIsSaving] = useState(false)

    const resetSaving = () => {
      setIsSaving(false);
      setFormData({
        createdAt: '',
        valorSensor: '',
        sensorId: '',
      });
    }

    const [formData, setFormData] = useState({
      createdAt: '',
      valorSensor: '',
      sensorId: '',
    });

    const handleChange = (e) => {

      const { name, value } = e.target;

      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));

    };

    const guardarJardin = async (formValues = formData) => {
      try {
          const response = await fetch("https://localhost:7094/api/Jardin/GuardarJardin", {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify({

                CreatedAt: formValues.createdAt,
                ValorSensor: formValues.valorSensor,
                SensorId: formValues.sensorId,

              })
          });
  
          if (response.ok) {

              formRef.current.resetFields(); // Reinicia los campos del formulario
              alert("La película se ha guardado correctamente");
              setJardines((pre)=>{
                return [ ...pre, formData  ]
              })

              setIsSaving(false)

          } else {
              alert(response.statusText);
          }
      } catch (error) {
          console.error("Error al guardar el jardín:", error);
      }
    }


    return (
      <>

        <div className={styles.container__estadisticas} >
          <Button onClick={ () => { setIsSaving (true)} } > Agregar nuevo jardín </Button>
          <Input.Search 
            placeholder= " Search here ..." 
            onSearch = {(value)=> {
              setSearchedText(value)
              alert(value)
            }}
            onChange={(e)=>{
              setSearchedText(e.target.value )
            }}
          />


          <Table
            columns={colums}
            dataSource={jardines}
            onchangeTable={onchangeTable}
          ></Table>
          {/* modal actualizar */}
          <Modal
            title="Editar Jardín"
            visible={isEditing}
            onCancel={() => {
              resetEditing()
            }}
            onOk={() => {
              // Llama a la función actualizarJardin con los valores del formulario
              actualizarJardin({
                createdAt: valueInputEditingJardin?.createdAt,
                valorSensor: valueInputEditingJardin?.valorSensor,
                sensorId: valueInputEditingJardin?.sensorId,
              });
              setJardines(pre => {
                return pre.map(_jardin=>{
                  if (_jardin.idJardin === valueInputEditingJardin.idJardin){
                    return valueInputEditingJardin
                  }
                  else{
                    return _jardin
                  }
                })
              })
              resetEditing()
            }}
            okText="Guardar"
          >

            <Input
              value={valueInputEditingJardin?.createdAt}
              onChange={(e) => handleInputChange('createdAt', e.target.value)}
            />
            <Input
              value={valueInputEditingJardin?.valorSensor}
              onChange={(e) => handleInputChange('valorSensor', e.target.value)}
            />
            <Input 
              value={valueInputEditingJardin?.sensorId} 
              onChange={(e) => handleInputChange('sensorId', e.target.value)}          
            />
          
          </Modal>

          {/* modal guardar */}
          <Modal
            title="Guardar Jardín"
            visible={isSaving}
            onCancel={() => {
              resetSaving()
            }}
            onOk={() => {
              guardarJardin(formData)
            }}


            okText="Guardar"
          >
               <Form
                    ref={formRef}
                    name="Formulario"
                >


                    <Item 
                        label="CreatedAt" 
                        rules={[{
                            required:true,
                            message: "Por favor ingresa la CreatedAt "
                        }]}
                        name = "createdAt"
                        >
                        <Input placeholder="input CreatedAt"  name="createdAt" value={formData.createdAt} onChange={handleChange}/>
                    </Item>

                    <Item 
                        label="ValorSensor"
                        rules={[{
                            required:true,
                            message: "Por favor ingresa la ValorSensor "
                        },
                        {
                            pattern: /^[1-9]\d*$/, 
                            message: "Ingresa solo números enteros positivos en la duracion"
                        }
                    ]}
                        name="valorSensor"
                        >
                        <Input placeholder="input valorSensor" name="valorSensor" value={formData.valorSensor} onChange={handleChange}  />
                    </Item>

                    <Item 
                        label="SensorId"
                        rules={[{
                            required:true,
                            message: "Por favor ingresa el SensorId "
                        },
                        {
                            pattern: /^[1-9]\d*$/,
                            message: "Ingresa solo números enteros positivos en el SensorId"
                        }
                    ]}
                        name="sensorId"
                        >
                        <Input placeholder="input sensorId" name="sensorId" value={formData.sensorId} onChange={handleChange} />
                    </Item>

                </Form>

          </Modal>

        </div>

      </>
    );
}

export default EstadisticasPage;
