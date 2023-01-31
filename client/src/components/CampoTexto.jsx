import TextField from '@mui/material/TextField';

const CampoTexto = ({etiqueta, value, type}) => {
    return (
        <TextField 
            variant="filled"
            label={etiqueta}
            value={value} 
            type={type}     
            disabled
        />
        
    )
}

export default CampoTexto;