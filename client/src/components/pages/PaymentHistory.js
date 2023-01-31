import { Card, Grid, Typography, CardContent, Divider, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function PaymentHistory() {
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
                        HISTORIAL DE PAGO
                         
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
                                    Numero de pago:  234568 <br></br>
                                    Servicio: Tutoria de Ingles <br></br>
                                    Valor pagado: 50000 $ <br></br>
                                    Fecha: 02/12/2022 $ <br></br>
                                    Descripcion Labor: Te enseño ingles hasta nivel B2 <br></br>


                                </h5>
                            </Typography>
                         

                            
                        </Grid>
                      
                   
                    </Card>

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
                                    Numero de pago:  949302 <br></br>
                                    Servicio: Corte de cabello <br></br>
                                    Valor pagado: 20000 $ <br></br>
                                    Fecha: 20/10/2022 $ <br></br>
                                    Descripcion Labor: Se reliza un corte de cabello <br></br>

                                </h5>
                            </Typography>
                        
                        </Grid>
                      
                   
                    </Card>
                    
                    <Button 
                                sx ={{mt: 1}}
                                variant = 'contained'
                                justifyContent="center" 
                                alignItems="center"
                                onClick={()=> navigate('/worker_menu')}
                            >
                                OK
                            </Button>
                    </CardContent>
                    
                </Card>

            </Grid>

        </Grid>

    )
  
}