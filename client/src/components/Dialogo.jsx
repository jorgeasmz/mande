import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DescriptionAlerts from "./Alertas";

export default function AlertDialog({text,content,fOption,sOption}) {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFirstOption = () => {
    //Devolver a la anterior ventana, despues de cerrar la cosita éxitosa.
    setAlert(true)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} disabled={alert}>
        {text}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {alert ? <DescriptionAlerts severity="success" title="Servicio contratado" content="El trabajador ha sido contratado éxitosamente" contentStrong="Contratación satisfactoria"/> : null}
        <DialogTitle id="alert-dialog-title">
          {text}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFirstOption} disabled={alert}>{fOption}</Button>
          <Button onClick={handleClose} autoFocus>
            {sOption}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}