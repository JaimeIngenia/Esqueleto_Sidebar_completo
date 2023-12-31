import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import { AreaChartOutlined , PoweroffOutlined} from "@ant-design/icons";
import { BarsOutlined, LogoutOutlined,UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
// import style from "./styles/MenuList.module.css";
import style from '../styles/MenuList.module.css'
import { useState } from "react";

const MenuList = ({ darkTheme }) => {
  const themeColors = {
    background: darkTheme ? '#11342F' : '#ffffff', // Fondo verde oscuro para dark, blanco para light
    text: darkTheme ? '#ffffff' : '#333333', // Texto blanco para dark, oscuro para light
    // background: darkTheme ? '#008000' : '#ffffff', // Fondo verde oscuro para dark, blanco para light
    // text: darkTheme ? '#ffffff' : '#333333', // Texto blanco para dark, oscuro para light

  };

  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className={style.menu__bar}
      style={{
        background: themeColors.background,
        color: themeColors.text,
      }}
    >
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link to={"/"}>
          Home
        </Link>
      </Menu.Item>

      <Menu.Item key="/estadisticas" icon={<AreaChartOutlined />}>
        <Link to={"/estadisticas"}>
          Estadisticas
        </Link>
      </Menu.Item>

      <Menu.SubMenu key="Sensores" icon={<BarsOutlined />} title="Sensores">

        <Menu.Item key="temperatura&humedad">
          <Link to={"/temperaturaHumedad"}>
            Temp y Humedad
          </Link>
        </Menu.Item>

        <Menu.Item key="humedad">
          <Link to={"/humedad"}>
            Humedad
          </Link>
        </Menu.Item>

        <Menu.Item key="riego">
          <Link to={"/riego"}>
            Riegos
          </Link>
        </Menu.Item>

      </Menu.SubMenu>

      <Menu.Item key="/usuario" icon={<UserOutlined />}>
        <Link to={"/user"}>
          Usuario
        </Link>
      </Menu.Item>

      <Menu.Item key="/humedad" icon={<PoweroffOutlined />}>
        <Link to={"/humedad"}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
};


export default MenuList;
