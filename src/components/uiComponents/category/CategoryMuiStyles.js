import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledImage = styled('img')(({ theme }) => ({
  height: '60px',
  width: '60px',
  borderRadius: '50%',
  imageRendering: 'pixelated',
  boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.2)',
  border: '1px solid gray'
}));

export const CategoryheaderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  bottom: '42px',
  position: 'relative',
}));

export const WrapperDiv = styled('div')(({ theme }) => ({
  margin: '10px',
  padding: '8px',
  justifyContent: 'center',
   transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)', // Adjust the scale value to control the zoom level
  },
  cursor:'pointer'
}));

export const CategoryTextWrapper = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600
}));

export const AgeTextWrapper = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
}));