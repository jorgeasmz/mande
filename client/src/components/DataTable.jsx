import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import Cards from "./Cards";
import AlertDialog from "./Dialogo";

//Que esta mondá reciba las columnas, y filas


export default function DataTable({rows, columns}) {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={9} />
    </div>
  );
}
