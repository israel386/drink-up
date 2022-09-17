import { Grid, Button } from '@mui/material'
import React from 'react'
import "./carousel.css"


const Carousel = () => {
  return (
    <Grid>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> 
    </Grid>
      
  )
}

export default Carousel