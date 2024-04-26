import React from "react";
import { Box, TextField, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { create } from '../conection/service'; 
import { useForm } from "react-hook-form";

export function AddUrl() {
  const { register, handleSubmit, reset } = useForm();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const onSubmit = async (data) => {
    try {
      await create(data.url);
      reset(); 
      setSnackbarMessage('URL saved successfully');
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarMessage('Error saving URL');
      reset();
      setOpenSnackbar(true);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh', 
      }}
    >
      <Box sx={{ width: '70%', textAlign: 'center' }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <TextField
            label="URL"
            variant="outlined"
            fullWidth
            {...register("url", { required: true })}
            sx={{ marginBottom: '20px', width: '100%' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: '10%' }}
          >
            Save
          </Button>
        </form>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
          sx={{ marginBottom: '500px' }} 
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleSnackbarClose}
            severity={snackbarMessage.includes('Error') ? 'error' : 'success'}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </Box>
    </Box>
  );
}
