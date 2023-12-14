import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import { AreaChartOutlined } from "@ant-design/icons";
import { BarsOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
// import style from "./styles/MenuList.module.css";
import style from '../styles/MenuList.module.css'
import { useState } from "react";

const MenuList = ({ darkTheme }) => {
  const themeColors = {
    background: darkTheme ? '#008000' : '#ffffff', // Fondo verde oscuro para dark, blanco para light
    text: darkTheme ? '#ffffff' : '#333333', // Texto blanco para dark, oscuro para light
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

      <Menu.Item key="/humedad" icon={<AppstoreOutlined />}>
        <Link to={"/humedad"}>
          Humedad
        </Link>
      </Menu.Item>

      <Menu.Item key="/temperatura" icon={<AreaChartOutlined />}>
        <Link to={"/temperatura"}>
          Temperatura
        </Link>
      </Menu.Item>

      <Menu.SubMenu key="task" icon={<BarsOutlined />} title="Task">
        <Menu.Item key="task-1">Task-1</Menu.Item>
        <Menu.Item key="task-2">Task-2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};


export default MenuList;
