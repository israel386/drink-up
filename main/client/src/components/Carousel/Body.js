import { Grid, Box, Button, Card, CardContent, CardActions, Typography} from '@mui/material'
import React from 'react'
import DrinkCard from '../Card/Card';

const drinks = ["Pina Colada", "Margarita", "Comsopolitan", "old fashion"];




const Body = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
            {/* ADDS WHATEVER YOU ADD INTO "CATERGORIES" ARRAY */}
        {drinks.map((drink) => (
        <Button variant="outlined">{drink}</Button>
        ))}
    </Grid>
      
  )
}

export default Body