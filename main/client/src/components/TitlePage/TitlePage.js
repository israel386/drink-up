import React  from 'react'
import { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material'
// import { Box, Stack } from '@mui/system';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Login from './Login';
// import { Grid } from '@mui/system';



const TitlePage = () => {

  const [open,setOpen] = useState(false);
  const [open2,setOpen2] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      style={{marginTop: 200}}>
      <Typography fontFamily='Lobster' variant="h1" >Drink Up</Typography>
      <Typography style={{textAlign: 'center', padding: 5}}variant='h3'>An app to help you find and choose your next drink</Typography>
      <div>
      <Button sx={{ color: 'black', margin: 2}} color='primaryVar' variant='contained' onClick={handleClickOpen}>Login</Button>
      {/* ----LOGIN MODAL---- */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      {/* ----LOGIN MODAL END---- */}

      <Button variant='contained' onClick={handleClickOpen2}>Sign Up</Button>
      {/* ----SIGN UP MODAL---- */}
      <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Cancel</Button>
          <Button onClick={handleClose2}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      {/* ----SIGN UP MODAL END---- */}
      </div>
    </Grid>
  );
}

export default TitlePage