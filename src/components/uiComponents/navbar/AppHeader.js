import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import { brandLogo } from "../../aasets";
import {
	Logo,
	AppNavBar,
	StyledShoppingCartIcon,
	StyledFavoriteIcon,
	StyledAccountCircleIcon,
	StyledSentimentSatisfiedAltIcon,
	StyledSettingsIcon,
	StyledLogoutIcon,
	StyledGridWrapper,
	Search,
	SearchIconWrapper,
	StyledInputBase,
	StyledMenuItem,
	StyledCheckroomIcon
} from "./AppHeaderMuiStyle";

const AppHeader = () => {
	const [openProfileMenu, setOpenProfileMenu] = useState(null);

	const handleClick = (event) => {
		setOpenProfileMenu(event.currentTarget);
	};

	const handleClose = () => {
		setOpenProfileMenu(null);
	};

	const open = Boolean(openProfileMenu);
	const id = open ? 'profileMenu' : undefined;


	const profilePopOver = () => (
		<Menu
			id="basic-menu"
			anchorEl={openProfileMenu}
			open={open}
			onClose={handleClose}
			disableAutoFocusItem
		>
			<div style={{ display: 'block' }}>
				<StyledMenuItem divider={true} onClick={handleClose}>
					<>
						<StyledSentimentSatisfiedAltIcon />
						My Profile
					</>
				</StyledMenuItem>
				<StyledMenuItem divider={true} onClick={handleClose}>
					<>
						<StyledSettingsIcon />
						Settings
					</>
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClose}>
					<>
						<StyledLogoutIcon />
						Logout
					</>
				</StyledMenuItem>
			</div>
		</Menu>
	);

	return (
		<AppNavBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Grid container alignItems="center" justifyContent="space-between">
						<StyledGridWrapper item xs={6} md={8} lg={8}>
							<Logo src={brandLogo} />
							<Search>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search…"
									inputProps={{ 'aria-label': 'search' }}
								/>
							</Search>
						</StyledGridWrapper>
						<Grid item xs={6} md={4} lg={4} textAlign={'right'}>
							<StyledCheckroomIcon/>
							<StyledFavoriteIcon />
							<StyledShoppingCartIcon />
							<StyledAccountCircleIcon aria-describedby={id} onClick={handleClick} />
							{id && profilePopOver()}
						</Grid>
					</Grid>
				</Toolbar>
			</Container>
		</AppNavBar>
	)
}
export default AppHeader

