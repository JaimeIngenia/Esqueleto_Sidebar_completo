import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// Nuevas pages
import {Login} from './pages/login'
import SideBarMenuPage from "./pages/sideBarMenuPage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";
import HomePage from "./pages/homePage/index.jsx";
import HumedadPage from "./pages/humedadPage/index.jsx";
import TemperaturaPage from "./pages/temperaturaPage/index.jsx";
import { Layout } from "antd";

const { Header, Sider } = Layout;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world Home Page!</div>,
//   },
//   {
//     path: "/nata",
//     element: <Nata />,
//   },
//   {
//     path: "/pagina2",
//     element: <div>Hello world! Pagina 2</div>,
//   },
//   {
//     path: "/pagina3",
//     element: <div>Hello world! Pagina 3</div>,
//   },
// ]);
function App() {
    //-------- redux

    // const { counterJaime } = useSelector( state => state.counter )
    // const { authorizedStateRedux } = useSelector( state => state.authorized )
    // const [stateReduxAut , setStateReduxAut] = useState(authorizedStateRedux)

    // useEffect(()=>{

    //     setStateReduxAut(authorizedStateRedux)

    // } , [authorizedStateRedux])

  let stateReduxAut = true;

  return (
    <>
      <BrowserRouter>
        <div className='container__app'>
          {stateReduxAut && <Layout />}
          
          {stateReduxAut && <SideBarMenuPage />}

          <Routes>
            {!stateReduxAut && <Route exact path="/" element={<Login />} />}

            <Route element={<ProtectedRoute canActivate={stateReduxAut} />}>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/humedad" element={<HumedadPage />} />
              <Route exact path="/temperatura" element={<TemperaturaPage />} />
            </Route>
          </Routes>

          {stateReduxAut && <Layout />}
        </div>
      </BrowserRouter>



    </>
  );
}

export default App;
