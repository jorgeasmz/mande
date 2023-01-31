import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import "./ClientMain.css";

// /main-client
const ClientMain = () => {
  //Histortial pago, solicitar servicio, pagar servicio.
  return (
    <div className="contenedor">
      <h1 className="titulo">¿Qué desea hacer hoy?</h1>
      <div className="div">
        <Link to={"/select-servicio"}>
          <Button variant="contained">Solicitar servicio</Button>
        </Link>
      </div>
      <div className="div">
        <Link to={"/historial-pago"}>
          <Button variant="contained">Historial de pagos</Button>
        </Link>
      </div>
      <div className="div">
        <Link to={"/pagar-servicio"}>
          <Button variant="contained">Pagar servicio</Button>
        </Link>
      </div>
    </div>
  );
};

export default ClientMain;
