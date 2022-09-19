import React from 'react'
import { Grid, Button, Card, CardContent, CardActions, Typography, CardMedia } from '@mui/material'
import { Container } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const drinks = ["Mexican Mule","Margarita", "Old Fashion"];


// const cardLayout = () => {
//     return (
//       <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//         component="img"
//         height="200"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//         />
//         <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//             Pina Colada
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//             abcdefghijklmnopqrstuvwxyz
//         </Typography>
//         </CardContent>
//         <CardActions>
//         <Button size="small">Learn More</Button>
//         </CardActions>
//       </Card> 
//     );
// }




const DrinkCard = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          component="img"
          height="200"
          image="./images/tequila_images/mexicanMule.png"
          alt="mexicanMule"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drinks[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          component="img"
          height="200"
          image="./images/tequila_images/bloodyMaria.png"
          alt="Bloody Maria"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drinks[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          component="img"
          height="200"
          image="./images/tequila_images/Paloma.png"
          alt="Paloma"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drinks[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          component="img"
          height="200"
          image="./images/tequila_images/TequilaSour.png"
          alt="Tequila Sour"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drinks[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          component="img"
          height="200"
          image="./images/tequila_images/TequilaSunrise.png"
          alt="Tequila Sunrise"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drinks[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      
    </Grid>
    
  );
}

export default DrinkCard




