import React from "react";
import Card from '@mui/material/Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StyledCardAction, StyledCardContent, StyledCardActionArea, StyledCardMedia, ProductWrapper, ProductNameWrapper } from "./ViewProductMuiStyles";
import ProductFilter from "../../uiComponents/filter/ProductFilter";
import { Grid } from "@mui/material";

const ViewProducts = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <ProductFilter />
        </Grid>
        <ProductWrapper item xs={10}>
          <Card sx={{ maxWidth: 230, width:'100%', margin: '9px',height:'fit-content' }}>
            <StyledCardActionArea>
              <StyledCardMedia
                component="img"
                height="200"
                image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="green iguana"
              />
              <StyledCardContent>
                <ProductNameWrapper>
                  Product Name
                  600
                </ProductNameWrapper>
              </StyledCardContent>
            </StyledCardActionArea>
            <StyledCardAction>
              <ShoppingCartIcon />
              <FavoriteIcon />
            </StyledCardAction>
          </Card>
        </ProductWrapper>
      </Grid>
    </div>
  )

}
export default ViewProducts