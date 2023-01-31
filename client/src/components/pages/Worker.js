import {
  Typography,
  Card,
  Grid,
  CardContent,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Working() {
  const navigate = useNavigate();

  const trabajos = [
    "Paseaar mascota",
    "Cortar cesped",
    "Tutoría de ingles",
    "Tutoria de matematicas",
    "Cerrajeria",
    "Dibujo",
    "Musica",
    "Aseo",
  ];

  const unidad = ["por hora", "por labor"];

  const { worker, setWorker } = useState({
    telefono: "",
    direccion: "",
    cuenta: "",
    foto_id: "",
    foto_perfil: "",
    trabajo: "",
    descripcion_trabajo: "",
    unidad: "",
    precio: "",
  });

  const handleChange = (e) => {
    setWorker({ ...worker, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(worker);
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }}>
          <Typography
            variant="5"
            textAlign="center"
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Worker sign up
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Teléfono"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="telefono"
                onChange={handleChange}
              />
              <TextField
                variant="filled"
                label="Dirección de residencia"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="direccion"
                onChange={handleChange}
              />

              <TextField
                variant="filled"
                label="Cuenta bancaria"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="cuenta"
                onChange={handleChange}
              />
              <TextField
                variant="filled"
                label="Link documento de identidad"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="foto_id"
                onChange={handleChange}
              />
              <TextField
                variant="filled"
                label="Link foto de perfil"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="foto_perfil"
                onChange={handleChange}
              />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={trabajos}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="seleccione un trabajo" />
                )}
                name="trabajo"
              />

              <TextField
                variant="filled"
                label="Descripcion trabajo"
                miltiline
                rows={3}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="descripcion_trabajo"
                onChange={handleChange}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={unidad}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="unidad de cobro" />
                )}
                name="unidad"
              />
              <TextField
                variant="filled"
                label="Precio"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="precio"
                onChange={handleChange}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => navigate("/worker_menu")}
              >
                Sign up as worker
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
