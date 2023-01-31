import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts({severity, title, content,contentStrong}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity} variant="filled">
        <AlertTitle>{title}</AlertTitle>
        {content} — <strong>{contentStrong}</strong>
      </Alert>
    </Stack>
  );
}