import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import ListadoServicio from "./components/pages/ListadoServicio";
import SelectServicio from "./components/pages/SelectServicio";
import ClientMain from "./components/pages/ClientMain";
import HistorialPago from "./components/pages/HistorialPago";
import PagoServicio from "./components/pages/PagoServicio";


export default function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="*" element={<Home />}/>
          <Route path="/main-client" element={<ClientMain />}/>
          <Route path="/historial-pago" element={<HistorialPago />}/>
          <Route path="/pagar-servicio" element={<PagoServicio />}/>
          <Route path="/select-servicio" element={<SelectServicio />}/>
          <Route path="/listado-servicio/Aseo" element={<ListadoServicio type = "aseo"/>}/>
          <Route path="/listado-servicio/Mascotas" element={<ListadoServicio type = "mascota"/>}/>
          <Route path="/listado-servicio/Jardinería" element={<ListadoServicio type = "jardineria"/>}/>
          <Route path="/listado-servicio/Estudio" element={<ListadoServicio type = "estudio"/>}/>
          <Route path="/listado-servicio/Cerrajería" element={<ListadoServicio type = "cerrajeria"/>}/>
          <Route path="/listado-servicio/Retratos" element={<ListadoServicio type = "retrato"/>}/>
          <Route path="/listado-servicio/Musica" element={<ListadoServicio type = "musica"/>}/>
          <Route path="/listado-servicio/Belleza" element={<ListadoServicio type = "belleza"/>}/>
          <Route path="/listado-servicio/Lavandería" element={<ListadoServicio type = "lavanderia"/>}/>
          <Route path="/listado-servicio/Fotografías" element={<ListadoServicio type = "fotografia"/>}/>
          
          
        </Routes>
      </BrowserRouter>
  );
}