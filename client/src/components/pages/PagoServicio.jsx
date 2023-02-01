import { useState } from "react";
import { Button } from "@mui/material";
import CampoTexto from "../CampoTexto";
import HoverRating from "../Rating";
import DescriptionAlerts from "../Alertas";
import "./PagoServicio.css";

// /pagar-servicio
const PagoServicio = () => {
  //Si el trabajador no ha dado ha terminado servicio -> Mostrar mensaje que diga "Bro, aún no", caso contrario -> Muestra num fact, calificar, valor y botón.
  let ya = true;
  const [alert, setAlert] = useState(false);
  const [clicked, setClicked] = useState(false);

  const viewEspera = () => {
    return (
      <div>
        <h1>El trabajador no ha finalizado su servicio aún, vuelva más tarde.</h1>
      </div>
    );
  };

  const handleOnClickButton = () => {
    // severity, title, content,contentStrong
    setAlert(true)
    setClicked(true)
    //Falta avisarle al trabajador que le pagaron.
  }

  const viewPago = () => {
    // Atributos que debe recibir: {nombre,telefono,tipoService,tipoTarifa,vlrTarifa,vlrPagar,numFactura}
    return (
      <div>
        {alert ? <DescriptionAlerts severity="success" title="Pago realizado" content="El pago ha sido realizado a partir de su método de pago configurado" contentStrong="Factura pagada"/> : null}
        <h1>Ventana de pago</h1>
        <div className="Campo">
          <CampoTexto
            etiqueta="Nombre del trabajador"
            value="JuanitoAlimaña"
            type="text"
          />
        </div>
        <div className="Campo">
          <CampoTexto
            etiqueta="Télefono del trabajador"
            value="312"
            type="number"
          />
        </div>
        <div className="Campo">
          <CampoTexto
            etiqueta="Tipo de servicio"
            value="Tutoría"
            type="text"
          />
        </div>
        <div className="Campo">
          <CampoTexto
            etiqueta="Tipo de tarifa"
            value="Por hora"
            type="text"
          />
        </div>
        <div className="Campo">
          <CampoTexto etiqueta="Valor tarifa" value="600" type="number" />
        </div>
        <div className="Campo">
          <CampoTexto etiqueta="Valor a pagar" value="1200" type="number" />
        </div>
        <div className="Campo">
          <CampoTexto etiqueta="Número de factura" value="300" type="number" />
        </div>
        <div className="boton">
          <Button variant="contained" onClick={handleOnClickButton} disabled={clicked}>Pagar</Button>
        </div>
        <div className="calificacion">
          <label>Califique el servicio</label>
          <HoverRating />
        </div>
      </div>
    );
  };

  return <>{ya ? viewPago() : viewEspera()}</>;
};

export default PagoServicio;
