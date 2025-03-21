import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonConatiner = styled(Box)(({ theme }) => ({
 justifyContent:'space-between',
 display:'flex',
 marginTop:'10px',
 padding: '15px'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  border: '1px solid',
  borderRadius: '0px 15px 0px 15px',
  color: '#905890'
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '4px',
  paddingRight: '4px'
 }));
 
 export const StyledSlogan = styled(Typography)(({ theme }) => ({
  background:' #f4a4be',
  textAlign: 'center',
  padding:' 8px',
  borderRadius:' 12px',
  margin: '8px',
  display: 'flex',
  justifyContent: 'center'
 }));

 export const StyledSubContent = styled(Typography)(({ theme }) => ({
  fontSize: '15px',
  color:'gray'
 }));