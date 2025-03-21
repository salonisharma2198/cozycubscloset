import { headlineBackground } from "../../aasets";
import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const BackgroundImgWrapper = styled('div')({
  height: '60vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  textAlign: 'center',
});

export const ShopNowButton = styled(Button)({
  backgroundColor: '#c7814b',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#be6623',
  },
});

export const WrapperDiv = styled('div')({
  backgroundImage: `url(${headlineBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

export const HeadingWrapper = styled('h1')({
  textAlign: 'center'
});


export const AnimatedTypography = styled(Typography)`
  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  padding-top: 9px;
  margin-bottom: 29px;
  text-align: center; /* Ensure the text is centered */
  animation: slideIn 0.5s ease forwards;
`;