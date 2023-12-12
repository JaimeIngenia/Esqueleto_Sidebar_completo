import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Nuevas importaciones
import { Button, Layout, theme } from "antd";
import { Logo } from "./components/Logo.jsx";
import MenuList from "./components/MenuList.jsx";
import { useState } from "react";
import ToggleThemeButton from "./components/ToggleThemeButton.jsx";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { counterSlice } from "./store/slices/counter/counterSlice.js";
import { Nata } from "./components/nata/Nata.jsx";

const { Header, Sider } = Layout;

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world Home Page!</div>,
  },
  {
    path: "/nata",
    element: <Nata />,
  },
  {
    path: "/pagina2",
    element: <div>Hello world! Pagina 2</div>,
  },
  {
    path: "/pagina3",
    element: <div>Hello world! Pagina 3</div>,
  },
]);
function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="container__app">
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          className="sidebar"
          theme={darkTheme ? "dark" : "light"}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>

        <Header style={{ padding: 0, background: colorBgContainer }}>
          {/* <Button type="text" icon={collapsed ? <p> Si </p> : <p> No </p>} /> */}
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>

        <RouterProvider router={router} />
        {/* {counterSlice} */}
      </Layout>
    </div>
  );
}

export default App;
