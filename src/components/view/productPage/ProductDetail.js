import React, { useCallback } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { ButtonConatiner, StyledButton, StyledTypography, StyledSlogan, StyledSubContent } from './ProductDetailMuiStyles';
import { useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import { babyDress } from '../../aasets';

const ProductDetail = () => {
  const { id } = useParams();
  const [size, setSize] = React.useState('');

  const handleChange = useCallback((event) => {
    setSize(event.target.value);
  }, [setSize]);

  return (
    <Grid container style={{ padding: '18px' }}>
      <Grid item xs={6} sx={{ textAlign: "center", padding:'10px' }}>
        <img
          src={babyDress}
          alt="Baby Dress"
          style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
        />
      </Grid>
      <Grid item xs={6}>
        <StyledTypography>Product Name</StyledTypography>
        <Divider />
        <StyledTypography>500 Rs</StyledTypography>
        <Divider />
        <FormControl fullWidth>
          <InputLabel id="Select_Size">Select Size</InputLabel>
          <Select
            labelId="Select_Size"
            id="sizeSelect"
            value={size}
            label="Select Size"
            onChange={handleChange}
          >
            <MenuItem value={10}>2-3 yrs</MenuItem>
            <MenuItem value={20}>4-5 yrs</MenuItem>
            <MenuItem value={30}>6-7 yrs</MenuItem>
          </Select>
        </FormControl>
        <ButtonConatiner>
          <StyledButton variant="outlined" startIcon={<FavoriteBorderIcon />}>Add To Whishlist</StyledButton>
          <StyledButton variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>Add To Cart</StyledButton>
          <StyledButton variant="outlined" startIcon={<ShoppingBasketIcon />}>Buy Now</StyledButton>
        </ButtonConatiner>
        <Box>
          <StyledTypography>Product Detail</StyledTypography>
          <StyledSubContent>
            FEATURES:<br />
            . Top Material: 60% Polyester, 35% Cotton, 5% Spandex:<br />
            . Bottom Material: 50% Cotton, 50%PU:<br />
            . Fit Type: Regular:<br />
            . The actual product may differ slightly in color from the one illustrated in the images.:<br />
            WHAT'S INCLUDED::<br />
            . 1 Blouse, 1 Skirt:<br />
            CARE::<br />
            . Gentle Wash:<br />
          </StyledSubContent>
        </Box>
        <StyledSlogan><LocalFloristIcon /> Made with Love, Chosen with Care – Perfect for Your Little One! <LocalFloristIcon /></StyledSlogan>
      </Grid>
    </Grid>
  )
}

export default ProductDetail;