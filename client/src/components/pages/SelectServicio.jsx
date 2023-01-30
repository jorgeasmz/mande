import Cards from "../Cards";

// /select-servicio
const SelectServicio = () => {
  const solicitud = () => {
    const config = {
      method: "GET",
    };
    fetch("http://localhost:3001/workers", config)
      .then((response) => response.json())
      .then((response) => console.log("DATA", response));
  };

  solicitud()
  return (
    <div>
      <h1>¡Hola, Cliente!</h1>
      <h2>Echa un vistazo en los servicios que se ofertan.</h2>
      <div>
        {/* Algo tipo Noestavacio ? return <> : undefined */}
        <Cards
          imagen="images/paseo-mascota.jpg"
          descripcion="¡Mira quién te puede ayudar a pasear a tu mascota!"
          etiqueta="Mascotas"
        ></Cards>
        <Cards
          imagen="images/aseo-casa.jpg"
          descripcion="¡Mira quién te puede ayudar con el aseo general!"
          etiqueta="Aseo"
        ></Cards>
        <Cards
          imagen="images/cortar-cesped.jpg"
          descripcion="¡Mira quién te puede ayudar con el cesped de tu jardín!"
          etiqueta="Jardinería"
        ></Cards>
        <Cards
          imagen="images/clases-particulares.jpg"
          descripcion="¡Mira quién te puede ayudar con tu estudio!"
          etiqueta="Estudio"
        ></Cards>
        <Cards
          imagen="images/cerrajeria.jpg"
          descripcion="¡Mira quién te puede ayudar con las cerraduras!"
          etiqueta="Cerrajería"
        ></Cards>
        <Cards
          imagen="images/dibujante.jpg"
          descripcion="¡Mira quién te puede ayudar haciendo retratos!"
          etiqueta="Retratos"
        ></Cards>
        <Cards
          imagen="images/musico.jpg"
          descripcion="¡Mira quién te puede ayudar con tus eventos!"
          etiqueta="Musica"
        ></Cards>
        <Cards
          imagen="images/salon-belleza.jpg"
          descripcion="¡Mira quién te puede ayudar con apartados estéticos!"
          etiqueta="Belleza"
        ></Cards>
        <Cards
          imagen="images/lavanderia.jpg"
          descripcion="¡Mira quién te puede ayudar con tu ropa sucia!"
          etiqueta="Lavandería"
        ></Cards>
        <Cards
          imagen="images/Fotografia.jpg"
          descripcion="¡Mira quién te puede ayudar con tus fotos!"
          etiqueta="Fotografías"
        ></Cards>
      </div>
    </div>
  );
};

export default SelectServicio;
