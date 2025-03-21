import React from "react";
import Card from '@mui/material/Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StyledCardAction, StyledCardContent, StyledCardActionArea, StyledCardMedia, ProductWrapper, ProductNameWrapper } from "./RenderProductMuiStyle";
import ProductFilter from "../../uiComponents/filter/ProductFilter";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { babyDress } from "../../aasets";

const ViewProducts = () => {
  const navigate=useNavigate();

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <ProductFilter />
        </Grid>
        <ProductWrapper item xs={10}>
          <Card onClick={()=>navigate(`/product_detail/1`)} sx={{ maxWidth: 230, width:'100%', margin: '9px',height:'fit-content' }}>
            <StyledCardActionArea>
              <StyledCardMedia
                component="img"
                height="200"
                image={babyDress}
                alt="green iguana"
              />
              <StyledCardContent>
                <ProductNameWrapper>
                  Product Name
                </ProductNameWrapper>
                <ProductNameWrapper>
                  MRP 600 rs
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