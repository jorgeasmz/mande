import Cards from "../Cards";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { workWithTask, whatWorkers, thereIs } from "../../services/work-tasks";

// /select-servicio
const SelectServicio = () => {
  //
  const [load, setLoad] = useState(true);
  const [data, setData] = useState();

  const consultaWorkTask = async (config) => {
    const data = await fetch("http://localhost:3001/worker-tasks", config);
    return data.json();
  };

  const configWorkTask = async () => {
    const config = {
      method: "GET",
    };
    const response = await consultaWorkTask(config);
    whatWorkers(response);
    setData(workWithTask);
    setLoad(false);
  };

  useEffect(() => {
    configWorkTask();
  }, [load]);

  const renderizar = (img, descrip, etiqueta, id) => {
    return (
      <Cards imagen={img} descripcion={descrip} etiqueta={etiqueta} id={id} />
    );
  };

  return (
    <>
      {load ? (
        <>
          <Box
            width={"100%"}
            height={"calc(100% - 90px)"}
            sx={{ display: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress color="secondary" size={60} />
          </Box>
        </>
      ) : (
        <div>
          <h1>¡Hola, Cliente!</h1>
          <h2>Echa un vistazo en los servicios que se ofertan.</h2>
          <div>
            {thereIs(1)
              ? renderizar(
                  "images/paseo-mascota.jpg",
                  "¡Mira quién te puede ayudar a pasear a tu mascota!",
                  "Mascotas",
                  "1"
                )
              : undefined}
            {thereIs(10)
              ? renderizar(
                  "images/aseo-casa.jpg",
                  "¡Mira quién te puede ayudar con el aseo general!",
                  "Aseo",
                  "10"
                )
              : undefined}
            {thereIs(2)
              ? renderizar(
                  "images/cortar-cesped.jpg",
                  "¡Mira quién te puede ayudar con el cesped de tu jardín!",
                  "Jardinería",
                  "2"
                )
              : undefined}
            {thereIs(3)
              ? renderizar(
                  "images/clases-particulares.jpg",
                  "¡Mira quién te puede ayudar con tu estudio!",
                  "Estudio",
                  "3"
                )
              : undefined}

            {thereIs(7)
              ? renderizar(
                  "images/cerrajeria.jpg",
                  "¡Mira quién te puede ayudar con las cerraduras!",
                  "Cerrajería",
                  "7"
                )
              : undefined}

            {thereIs(8)
              ? renderizar(
                  "images/dibujante.jpg",
                  "¡Mira quién te puede ayudar haciendo retratos!",
                  "Retratos",
                  "8"
                )
              : undefined}

            {thereIs(9)
              ? renderizar(
                  "images/musico.jpg",
                  "¡Mira quién te puede ayudar con tus eventos!",
                  "Musica",
                  "9"
                )
              : undefined}

            {thereIs(11)
              ? renderizar(
                  "images/salon-belleza.jpg",
                  "¡Mira quién te puede ayudar con apartados estéticos!",
                  "Belleza",
                  "11"
                )
              : undefined}

            {thereIs(14)
              ? renderizar(
                  "images/lavanderia.jpg",
                  "¡Mira quién te puede ayudar con tu ropa sucia!",
                  "Lavandería",
                  "14"
                )
              : undefined}

            {thereIs(15)
              ? renderizar(
                  "images/Fotografia.jpg",
                  "¡Mira quién te puede ayudar con tus fotos!",
                  "Fotografías",
                  "15"
                )
              : undefined}
          </div>
        </div>
      )}
    </>
  );
};

export default SelectServicio;
