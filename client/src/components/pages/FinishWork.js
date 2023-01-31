import { Card, Grid, Typography, CardContent, Divider, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";


export default function FinishWork() {
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
                        ¡EN ESTE MOMENTO ESTÁS TRABAJANDO!
                         
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
                                onClick={()=> navigate('/worker_menu')}
                                
                            >
                                TERMINAR TRABAJO
                            </Button>
                        </Grid>
                      
                   
                    </Card>
                 
                       
                    </CardContent>
                    
                </Card>

            </Grid>

        </Grid>

    )
  
}