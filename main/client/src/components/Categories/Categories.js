import React from 'react'
import {Grid, Button} from '@mui/material'


const categories = ["Rum", "Tequila","Vodka"];

const Categories = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
            {/* ADDS WHATEVER YOU ADD INTO "CATERGORIES" ARRAY */}
        {categories.map((category) => (
        <Button variant="contained" color="secondaryVar" sx={{m:2}}>{category}</Button>
        ))}
    </Grid>
  )
}   

export default Categories