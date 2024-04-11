import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

export const FooterWrapper = styled('footer')(({ theme }) => ({
  backgroundColor: '#d9af8f',
  color: 'white',
  paddingTop: '20px',
  paddingBottom: '20px',
  position: 'relative', // Change position to 'absolute'
  bottom: '0', // Position the footer at the bottom of the viewport
  width: '100%',

}))

export const ContactInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  marginBottom: '3px'
}))

export const FooterHeading = styled(Typography)(({ theme }) => ({
  fontSize: '26px',
  marginBottom: '8px',
  textDecoration: 'underline',

}))

export const Picture = styled('img')(({ theme }) => ({
  width: '73px',
  height: '73px',
  position: 'absolute',
  bottom: '0px',
  right:'20px'
}))

export const PictureWrapper = styled('div')(({ theme }) => ({
  textAlign: 'right',
}))

export const ShoppingCartImg = styled('img')(({ theme }) => ({
  width: '103px',
  transform: 'scaleX(-1)',
  right: '0px',
  bottom: '17px',
  position: 'absolute',
  width: '88px'
}))

export const GridContainerWrapper = styled(Grid)(({ theme }) => ({
  background: 'rgb(144 88 144)',
  padding: '23px',
  textAlign: 'justify',
}))

