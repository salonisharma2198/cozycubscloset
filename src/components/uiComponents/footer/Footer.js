import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  FooterWrapper,
  ContactInfo,
  FooterHeading,
  Picture, PictureWrapper,
  ShoppingCartImg,
  GridContainerWrapper
} from "./FooterMuiStyle";
import { shoppingCart, mushroom } from "../../aasets";
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  const categoryArray = ['New Arrivals', 'Top Selling',];
  const supportArray = ['Privacy Policy', 'Exchange', 'Terms Of Services'];

  const renderList = (items) => {
    return items.map((value, index) => (
      <Typography key={index}>{value}</Typography>
    ));
  };

  return (
    <FooterWrapper container>
      <GridContainerWrapper container>
        <Grid item xs={4}>
          <FooterHeading>Categories</FooterHeading>
          <div>
            {renderList(categoryArray)}
          </div>
        </Grid>
        <Grid item xs={4}>
          <FooterHeading>Support</FooterHeading>
          <div>
          {renderList(supportArray)}
          </div>
        </Grid>
        <Grid item xs={4}>
          <FooterHeading>Reach-Out</FooterHeading>
          <ContactInfo>
            <BusinessIcon /><Typography>Address</Typography>
          </ContactInfo>
          <ContactInfo>
            <EmailIcon /><Typography>cosycubscloset@gmail.com</Typography>
          </ContactInfo>
          <ContactInfo>
            <LocalPhoneIcon /><Typography>+91 1234567898</Typography>
          </ContactInfo>
          <ContactInfo> <Typography>@ COZYCUBSCLOSET since 2025</Typography></ContactInfo>
          {/* <div style={{textAlign:'right'}}>
        <ShoppingCartImg src={shoppingCart}/>
        </div> */}
        </Grid>
      </GridContainerWrapper>
      {/* <PictureWrapper>
        <Picture src={mushroom} />
      </PictureWrapper> */}
    </FooterWrapper>
  )
}
export default Footer