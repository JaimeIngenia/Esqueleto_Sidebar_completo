import React from 'react';
import styles from './styles/HomePage.module.css'
import plantaHome from '../../assets/plantaHome.svg'
import iconos from '../../assets/iconos.svg'



const HomePage = () => {
    return (
        <div className={styles.contenedor__home__page}>
            {/* <h1>Hola soy home page!</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odio voluptatum deserunt culpa vitae eum itaque doloremque sequi totam, ut dolores distinctio officiis nesciunt assumenda. Voluptatum dolores nesciunt cupiditate debitis! */}
            <div className={styles.planta__superior} >
                <img src={plantaHome} alt="" />
                <div className={styles.texto__planta} >

                        <h4> {`Temperatura : ${15} °C`} </h4>
                        <h4> {`Humedad : ${15} %`} </h4>
                        <h4> {`Riegos x dia : ${2} `} </h4>


                </div>
            </div>

            <div className={styles.planta__media} >
                <h4>Estado ON</h4>
            </div>

            <div className={styles.planta__baja} >
                <img src={iconos} alt="" />
            </div>
        </div>
    );
}

export default HomePage;
