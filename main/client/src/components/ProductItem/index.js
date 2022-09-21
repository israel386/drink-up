import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Grid, Button, Card, CardContent, CardActions, Typography, CardMedia } from '@mui/material'
// import { Container } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (

    
      <Grid item>
        <Card sx={{ maxWidth: 345, minHeight:390, minWidth:345, maxHeight:390}}>
          <CardMedia
          component="img"
          to={`/products/${_id}`}
          height="200"
          image={`/images/${image}`}
          // src={`/images/${image}`}
          alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p">
            DRINK DESCRIPTION
            </Typography>
          </CardContent>
          <CardActions>
            <Checkbox icon={<FavoriteBorder />} onClick={addToCart} checkedIcon={<Favorite />} />
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
  





    
    // <div className="card px-1 py-1">
    //   <Link to={`/products/${_id}`}>
    //     <img
    //       alt={name}
    //       src={`/images/${image}`}
    //     />
    //     <p>{name}</p>
    //   </Link>
    //   <button onClick={addToCart}>Save Drink</button>
    // </div>
  );
}

export default ProductItem;
