import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import AppBar from '@mui/material/AppBar';
import Grid from "@mui/material/Grid";

export const Logo = styled('img')(({ theme }) => ({
  height: '62px',
  padding: '8px',
}))

export const AppNavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#905890',
}))

const iconStyles = {
  margin: "0 8px",
  fontSize: "30px",
};

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)(iconStyles);

export const StyledFavoriteIcon = styled(FavoriteIcon)(iconStyles);

export const StyledAccountCircleIcon = styled(AccountCircleIcon)(iconStyles);

export const StyledCheckroomIcon = styled(CheckroomIcon)(iconStyles);


const dropdownMenuIcon = {
  color: ' #905890',
  marginRight: '6px',
  fontSize: '19px',
}
export const StyledSentimentSatisfiedAltIcon = styled(SentimentSatisfiedAltIcon)(dropdownMenuIcon);

export const StyledSettingsIcon = styled(SettingsIcon)(dropdownMenuIcon);

export const StyledLogoutIcon = styled(LogoutIcon)(dropdownMenuIcon);

export const StyledGridWrapper = styled(Grid)({
  display: 'flex',
  alignItems: 'center'
});

export const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width: 'auto',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export const StyledMenuItem = styled(MenuItem)({
  fontSize: '14px',
});