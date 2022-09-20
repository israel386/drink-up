import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Button, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { LOGIN } from '../utils/mutations';

function Signup(props) {
  // LOGIN LOGIC-----------------
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  // SING IN LOGIC--------------
  const [formState2, setFormState2] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit2 = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };






  
  // ---- OPEN=LOGIN & OPEN2=SIGNUP----
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

  // ---ROUTING---
  
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      style={{marginTop: 150}}>
      {/* sx={{display: { xs: '', md: 'flex' },}} */}
      <Typography fontFamily='Lobster' variant="h1" >Drink Up</Typography>
      <Typography style={{textAlign: 'center', padding: 5}}variant='h4'>An app to help you find and choose your next drink</Typography>
      <div>
      <Button sx={{margin: 2}} color='primary' variant='outlined' onClick={handleClickOpen}>Login</Button>
      {/* ----LOGIN MODAL---- */}
      <Dialog open={open} onSubmit={handleFormSubmit} onClose={handleClose}>
      {/* {submitted ? <Typography color='secondary' className='success-message'>Successfully logged in</Typography> : null} */}
        <DialogTitle>Login </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="email"
            type="email"
            onChange={handleChange}
            label="Email Address"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            name="password"
            id="pwd"
            onChange={handleChange}
            fullWidth
            variant="standard"
           />
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
             </div>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  type='submit'>Log In</Button>
        </DialogActions>
      </Dialog>
      {/* ----LOGIN MODAL END---- */}

      <Button variant='contained' onClick={handleClickOpen2}>Sign Up</Button>
      {/* ----SIGN UP MODAL---- */}
      <Dialog open={open2} onSubmit={handleFormSubmit2} onClose={handleClose2}>
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent onSubmit={handleFormSubmit2}>
          <DialogContentText>
            To make a profile, please enter your email address and make a password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            name="firstName"
            id="firstName"
            onChange={handleChange2}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange2}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            name="email"
            type="email"
            id="email"
            onChange={handleChange2}
            fullWidth
            variant="standard"
          />
           <TextField
            htmlFor="pwd"
            autoFocus
            margin="dense"
            label="*******"
            name="password"
            type="password"
            onChange={handleChange2}
            id="pwd"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Cancel</Button>
          <Button type="submit">Sign Up</Button>
        </DialogActions>
      </Dialog>
      {/* ----SIGN UP MODAL END---- */}
      </div>
    </Grid>
    
  );
}

export default Signup;



// <div className="container my-1">
    //   <Link to="/login">← Go to Login</Link>

    //   <h2>Signup</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="firstName">First Name:</label>
    //       <input
    //         placeholder="First"
    //         name="firstName"
    //         name="firstName""
    //         id="firstName"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="lastName">Last Name:</label>
    //       <input
    //         placeholder="Last"
    //         name="lastName"
    //         type="lastName"
    //         id="lastName"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>
