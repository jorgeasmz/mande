import DataTable from "../DataTable";
import AlertDialog from "../Dialogo";



// /listado-servicio/LabelDeActividad
const ListadoServicio = ({type}) => {
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
          width: 100
        },
        {
          field: "contratar",
          headerName: "Contratar",
          width: 160,
          renderCell: () => {
            return (
              <>
                <AlertDialog text="Contratar" content="¿Desea contratar a el compae, este man cobra EQUIS por Hora?" fOption="Aceptar" sOption="Cerrar"/>
              </>
            );
          },
        },
      ];
      const rows = [
        {id:1, nombre: "Alimaña", correo: "alimaña@juanito.com", numero:"3088888", puntuacion:"4.0", distancia:"4 mts", descripcion: "Bro, mirá te va a quedar de ptm el cabello.", tipoTarifa:"Por labor", vlrTarifa: "5000"},
      ];

    const siContratar = () =>{
        //Crea el servicio, notifica al trabajador con dir persona; labor, lo pone en ocupado.
    }
    //fOption={siContratar}

    return(
        <div>
        <h1>Servicios disponibles para categoría "{type}"</h1>
        <DataTable rows = {rows} columns={columns}/>
        </div>
    );
}

export default ListadoServicio;