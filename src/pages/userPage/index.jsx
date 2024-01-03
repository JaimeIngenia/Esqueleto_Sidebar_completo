import React from 'react';
import styles from './styles/UserPage.module.css'
import logoUser from '../../assets/user.svg'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const UserPage = () => {
    return (
        <div className={styles.container__user}>
            <div className={styles.container__logo__user} >
                <img src={logoUser} alt="" />
            </div>

            <div className={styles.container__formulario} >

                <div className={styles.container__formulario__item}>
        
                    <h2>Nombre: </h2>

                    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />

                </div>

                <div className={styles.container__formulario__item}>
    
                    <h2>Correo: </h2>

                    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />

                </div>

                <div className={styles.container__formulario__item__final}>

                    <h2> Jardín: </h2>
                    <h3 className={styles.container__formulario__item__nombreJardin} > Jardín villa floral</h3>
                </div>


            </div>
        </div>
    );
}

export default UserPage;
