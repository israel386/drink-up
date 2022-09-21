import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Typography, Grid } from '@mui/material';

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <Grid container direction="column"
      justifyContent="center"
      alignItems="center">
      <div>
        <img
          id="drawerImage"
          src={`/images/${item.image}`}
          alt=""

        />
      </div>
      <div>
        <Typography>{item.name}</Typography>
        <div>
          <Typography
            color='red'
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            Remove item
          </Typography>
        </div>
      </div>
    </Grid>
  );
}

export default CartItem;