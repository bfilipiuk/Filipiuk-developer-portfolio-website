import React from 'react';
import Alert from '@mui/material/Alert';

const FailAlert = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <Alert severity="error" onClose={onClose}>
      Nie udało się wysłać wiadomości.
    </Alert>
  );
};

export default FailAlert;
