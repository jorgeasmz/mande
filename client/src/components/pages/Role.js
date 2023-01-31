//import React from "react";
//import { useFormik } from "formik";
//import "./SignUp.css";
//import "../../App.css";
//import * as Yup from "yup";
//import { Button, TextField } from "@mui/material";
import { Card, Grid, Typography, CardContent, Divider, Button} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from "react-router-dom";

export default function Role() {
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
                    <Typography xs display="flex" justifyContent="center" alignItems="center">Choose your role!</Typography>
                    <CardContent>
                    <Grid container>
                        <Grid item xs display="flex" justifyContent="center" alignItems="center">
                            <WorkIcon  sx={{display: 'block', margin: '.5rem 0'}}/>
                            <Button 
                            variant = 'contained' 
                            color= 'primary'
                            type='submit' 
                            onClick={()=> navigate('/sign-up/working')}>
                                EMPLEADO
                            </Button>
                        </Grid>

                        <Divider 
                        orientation="vertical"
                        xs display="flex" 
                        justifyContent="center" 
                        alignItems="center"
                         flexItem sx={{display: 'block', margin: '.5rem 0'}}>
                            
                        </Divider>
                        <Grid item xs display="flex" justifyContent="center" alignItems="center">
                            <PersonIcon sx={{display: 'block', margin: '.5rem 0'}}/>
                            <Button variant = 'contained' color= 'primary' type='submit'>
                                CLIENTE
                            </Button>
                        </Grid>
                    </Grid>
                       
                    </CardContent>
                </Card>

            </Grid>

        </Grid>

    )
  
}
