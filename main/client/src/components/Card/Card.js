import React from 'react'
import { Grid, Button, Card, CardContent, CardActions, Typography, CardMedia } from '@mui/material'
import { Container } from '@mui/system';


const drinks = ["Pina Colada","Margarita", "Old Fashion"];


// const cardLayout = () => {
//     return (
//       <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//           />
//           <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//               Pina Colada
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//               abcdefghijklmnopqrstuvwxyz
//           </Typography>
//           </CardContent>
//           <CardActions>
//           <Button size="small">Learn More</Button>
//           </CardActions>
//       </Card>
      
//     );
// }



const DrinkCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {drinks}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    
  );
}

export default DrinkCard




