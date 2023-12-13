import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import { AreaChartOutlined } from "@ant-design/icons";
import { BarsOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
// import style from "./styles/MenuList.module.css";
import style from '../styles/MenuList.module.css'

const MenuList = ({ darkTheme }) => {
  //const navigate = useNavigate();
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className={style.menu__bar}
      //   onClick={(item) => {
      //     navigate(item.key);
      //   }}
    >
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link  to={"/"}>
          Home
        </Link>
        {/* <a href="/">Home</a> */}
      </Menu.Item>

      <Menu.Item key="/humedad" icon={<AppstoreOutlined />}>
        <Link  to={"/humedad"}>
          Humedad
        </Link>
        {/* <a href="/humedad">Humedad</a> */}
      </Menu.Item>

      <Menu.Item key="/temperatura" icon={<AreaChartOutlined />}>
        <Link  to={"/temperatura"}>
        Temperatura
        </Link>
        {/* <a href="/temperatura">Temperatura</a> */}
      </Menu.Item>

      <Menu.SubMenu key="task" icon={<BarsOutlined />} title="Task">
        <Menu.Item key="task-1">Task-1</Menu.Item>
        <Menu.Item key="task-2">Task-2</Menu.Item>
      </Menu.SubMenu>

      {/* <Menu.Item key="/pagina3" icon={<AreaChartOutlined />}></Menu.Item> */}
    </Menu>
  );
};

export default MenuList;
