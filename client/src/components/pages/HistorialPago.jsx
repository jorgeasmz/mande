import DataTable from "../DataTable";
import AlertDialog from "../Dialogo";

// /historial-pago
const HistorialPago = () =>{
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
          field: "tipoTarifa",
          headerName: "Tipo de tarifa",
          width: 100,
        },
        {
          field: "pagado",
          headerName: "Valor pagado",
          width: 100,
        },
        {
            field: "factura",
            headerName: "Num. Factura",
            width:100
        }
      ];
      const rows = [
        {id:1, nombre: "Alimaña", correo: "alimaña@juanito.com", numero:"3088888", puntuacion:"4.0", distancia:"4 mts", tipoTarifa:"Por labor", pagado: "5000", factura:"#321"},
      ];

    return (
        <div>
            <h1>Mira we, lo que has pagado</h1>
            <DataTable columns={columns} rows={rows} />
        </div>
    )
}

export default HistorialPago;