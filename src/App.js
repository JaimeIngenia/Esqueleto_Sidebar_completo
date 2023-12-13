import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {

  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
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

        {stateReduxAut ? <SideBarMenuPage  /> : null}

        <Routes>
                {
                    // !true ?  <Route exact path="/" element={<Login  />} /> : null
                    !stateReduxAut ?  <Route exact path="/" element={<Login  />} /> : null
                    
                }

                <Route element={<ProtectedRoute canActivate={stateReduxAut} />} >
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/humedad" element={<HumedadPage />} />
                        <Route exact path="/temperatura" element={<TemperaturaPage />} />
                </Route>
        </Routes>

    
    </BrowserRouter>
      {/* <RouterProvider router={router} /> */}


    </>
  );
}

export default App;
