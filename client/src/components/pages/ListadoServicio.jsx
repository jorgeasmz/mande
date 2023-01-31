import DataTable from "../DataTable";
import AlertDialog from "../Dialogo";
import { useState, useEffect } from "react";
import { addIdWorkers, listWorkers } from "../../services/listTask";

// /listado-servicio/LabelDeActividad
const ListadoServicio = ({ type, id }) => {
  //Pida la info, la da formato y llena la tabla.

  const columns = [
    { field: "nombre", headerName: "Nombre", width: 70 },
    { field: "correo", headerName: "Email", width: 130 },
    { field: "numero", headerName: "Teléfono", width: 130 },
    {
      field: "puntuacion",
      headerName: "Puntuación",
      width: 100,
    },
    {
      field: "distancia",
      headerName: "Distancia",
      width: 100,
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 300,
    },
    {
      field: "tipoTarifa",
      headerName: "Tipo de tarifa",
      width: 100,
    },
    {
      field: "vlrTarifa",
      headerName: "Valor tarifa",
      width: 100,
    },
    {
      field: "contratar",
      headerName: "Contratar",
      width: 160,
      renderCell: () => {
        return (
          <>
            <AlertDialog
              text="Contratar"
              content="¿Desea contratar a el compae, este man cobra EQUIS por Hora?"
              fOption="Aceptar"
              sOption="Cerrar"
            />
          </>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      nombre: "Alimaña",
      correo: "alimaña@juanito.com",
      numero: "3088888",
      puntuacion: "4.0",
      distancia: "4 mts",
      descripcion: "Bro, mirá te va a quedar de ptm el cabello.",
      tipoTarifa: "Por labor",
      vlrTarifa: "5000",
    },
  ];

  const [load, setLoad] = useState(true);
  const [data, setData] = useState();
  let arrayData = [];

  const consultaWorkTask = async (config, id) => {
    const data = await fetch(`http://localhost:3001/worker-tasks/task_id/${id}`, config);
    return data.json();
  };

  const configWorkTask = async (id) => {
    const config = {
      method: "GET",
    };
    const response = await consultaWorkTask(config, id);
    //console.log("Response", response)
    addIdWorkers(response)
    if(listWorkers.length > 0){
      arrayData.push(listWorkers[0])
    }
    
    //setData(listWorkers)
    setLoad(false)
  };

  const definirTask = async () => {
    //console.log("id", id == 3)
    if(id == 3 || id == 4 || id == 5 || id == 6){
      for (var i = 3; i < 7; i++) {
        configWorkTask(i)
      }
    }
    console.log("AData",arrayData)

  }

  

  useEffect(() => {
    definirTask();
    
  }, [load]);

  const siContratar = () => {
    //Crea el servicio, notifica al trabajador con dir persona; labor, lo pone en ocupado.
  };
  //fOption={siContratar}

  return (
    <div>
      <h1>Servicios disponibles para categoría "{type}"</h1>
      <DataTable rows={rows} columns={columns} />
    </div>
  );
};

export default ListadoServicio;
