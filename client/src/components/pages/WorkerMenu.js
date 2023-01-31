import { SnackbarContent, Card, Grid, Typography, CardContent, Divider, Button} from "@mui/material";

import PaidIcon from '@mui/icons-material/Paid';
import {useNavigate} from "react-router-dom";


export default function WorkerMenu() {
   
    const noSeleccion = (
        <Button 
        color="primary"
         size="small"
         >
          Aún no te han seleccionado
        </Button>
      );

      const Seleccion = (
        
        <Button 
        color="primary" 
        size="small"
        onClick={()=> navigate('/worker_selected')}
        >
          ¡Te seleccionaron!
        </Button>
      );
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
                    <Typography xs display="flex" justifyContent="center" alignItems="center">
                        Menu trabajador
                    </Typography>
                    <CardContent>
                    <Grid container>
                        <Grid item xs display="flex" justifyContent="center" alignItems="center">
                            
                            <SnackbarContent
                            sx={{display: 'block', margin: '.5rem 0'}} 
                            message="Aquí aparece cuando te seleccionen para un trabajo:" 
                            action={Seleccion} 
                            />

                        </Grid>

                        <Divider 
                        orientation="vertical"
                        xs display="flex" 
                        justifyContent="center" 
                        alignItems="center"
                         flexItem sx={{display: 'block', margin: '.5rem 0'}}>
                            
                        </Divider>
                        <Grid item xs display="flex" justifyContent="center" alignItems="center">
                            <PaidIcon sx={{display: 'block', margin: '.5rem 0'}}/>
                            <Button 
                            variant = 'contained'
                             color= 'primary'
                              type='submit'
                              onClick={()=> navigate('/payment_history')}
                              >
                                HISTORIAL DE PAGOS
                            </Button>
                        </Grid>
                    </Grid>
                       
                    </CardContent>
                </Card>

            </Grid>

        </Grid>

    )
  
}
