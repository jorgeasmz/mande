import { Card, Grid, Typography, CardContent, Divider, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";


export default function WorkerSelected() {
    const navigate = useNavigate()
    return (
        <Grid 
        container 
        direction = 'column' 
        alignItems = 'center' 
        justifyContent = 'center'
        >

            <Grid item xs = {3}>
                <Card
                    sx ={{mt: 5}}
                    
                >
                    <Typography 
                    xs display="flex" 
                    justifyContent="center" 
                    alignItems="center">
                        ¡TE SELECCIONARON PARA UN TRABAJO!
                         
                    </Typography>
                    <Typography 
                    xs display="flex" 
                    justifyContent="center" 
                    alignItems="center">
                        
                       <h4> 
                        ¡HOLA TRABAJADOR!  
                       </h4>
                    </Typography>
                    <Typography 
                    xs display="flex" 
                    justifyContent="center" 
                    alignItems="center">
                        
                       
                          Te seleccionaron para realizar el trabajo  <br></br>
                          de tutoria de Ingles durante una hora.<br></br> El costo de
                          tu labor es de 50000 $.
                       
                    </Typography>
                    <CardContent>
                    <Card
                    justifyContent="center" 
                    alignItems="center"
                    sx ={{mt: 1}}
                    style={{
                        backgroundColor: "#b3e4f5",
                        padding: '1rem',
                    }}
                    >
                        <Grid 

                        container spacing={2} 
                         
                        justifyContent="center" 
                        alignItems="center"
                        >
                            <Typography>
                                    
                                <h5> 
                                    Cliente:  Juan Ramirez <br></br>
                                    Direccion: kr 42 calle 9 <br></br>
                                    Distancia: 5 km <br></br>
                                    Descripcion Labor: Te enseño ingles hasta nivel B2 <br></br>


                                </h5>
                            </Typography>
                         

                            <Button 
                                variant = 'contained'
                                justifyContent="center" 
                                alignItems="center"
                                onClick={()=> navigate('/finish_work')}
                            >
                                ACEPTAR
                            </Button>
                        </Grid>
                      
                   
                    </Card>
                 
                       
                    </CardContent>
                    
                </Card>

            </Grid>

        </Grid>

    )
  
}
