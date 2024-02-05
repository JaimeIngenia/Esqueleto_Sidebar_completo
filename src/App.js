import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment } from './store/slices/counter'
import { changeAuthorized } from "./store/slices/authorized"

// Nuevas pages
import {Login} from './pages/login'
import SideBarMenuPage from "./pages/sideBarMenuPage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";
import HomePage from "./pages/homePage/index.jsx";
import HumedadPage from "./pages/humedadPage/index.jsx";
import TemperaturaHumedadPage from "./pages/temperaturaHumedadPage";
import RiegoPage from "./pages/riegoPage/index.jsx";
import UserPage from "./pages/userPage/index.jsx";
import LogOutPage from "./pages/logOutPage/index.jsx";
import { Button, Layout } from "antd";
import EstadisticasPage from "./pages/estadisticasPage/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css"
import PokemonApp from "./PokemonApp.jsx";
// import 'antd/dist/reset.css';


const { Header, Sider } = Layout;


function App() {
    //-------- redux

    const { counterJaime } = useSelector( state => state.counter )
    const dispatch = useDispatch();

    const { authorizedStateRedux } = useSelector( state => state.authorized )
    const [stateReduxAut , setStateReduxAut] = useState(authorizedStateRedux)

    useEffect(()=>{

        setStateReduxAut(authorizedStateRedux)

    } , [authorizedStateRedux])

  // let stateReduxAut = false;

  return (
    <>
      <h1>
      {/* {counterJaime}
      {authorizedStateRedux ? <h1>true</h1> : <h1>false</h1>  }  */}
      </h1>  

      {/* <Button onClick={ () => dispatch( increment() )} >Counter</Button>
      <Button onClick={ () => dispatch( changeAuthorized() )} >Autorized</Button> */}
      <BrowserRouter>
        <div className='container__app'>
          {stateReduxAut && <Layout />}
          
          {stateReduxAut && <SideBarMenuPage />}

          <Routes>
            {!stateReduxAut && <Route exact path="/" element={<Login />} />}

            <Route element={<ProtectedRoute canActivate={stateReduxAut} />}>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/humedad" element={<HumedadPage />} />
              <Route exact path="/temperaturaHumedad" element={<TemperaturaHumedadPage />} />
              <Route exact path="/estadisticas" element={<EstadisticasPage />} />
              <Route exact path="/riego" element={<RiegoPage />} />
              <Route exact path="/user" element={<UserPage />} />
              <Route exact path="/logout" element={<LogOutPage />} />
              <Route exact path="/pokemon" element={<PokemonApp />} />


            </Route>
          </Routes>

          {stateReduxAut && <Layout />}
        </div>
      </BrowserRouter>



    </>
  );
}

export default App;
