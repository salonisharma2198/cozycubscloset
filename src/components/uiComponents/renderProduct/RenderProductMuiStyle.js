import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


export const StyledCardAction = styled(CardActions)(({ theme }) => ({
  backgroundColor:'#83c8b3',
  color:'white'
}))

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor:'#d67192',
  color:'white',
  padding:'8px',
}))

export const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  boxShadow:' 1px 0px 2px 1px #dfd3d3',
  border: '1px solid #ccc3c3',
}))

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  objectFit:'fill'
}))

export const ProductWrapper = styled(Grid)(({ theme }) => ({
  display:'flex',
  padding:'15px 11px 11px 35px',
}))

export const ProductNameWrapper = styled(Typography)(({ theme }) => ({
fontSize:'14px',
textAlign:'left'
}))

