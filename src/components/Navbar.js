import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Menu, IconButton, MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		zIndex: "2",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		marginLeft: "1rem",
		marginRight: "1rem",
		letterSpacing: "0.07rem",
		fontWeight: "500",
		fontSize: "2rem",
		padding: "1.4rem 0.3rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem",
			marginLeft: "0.4rem"
		},
	},
	nav: {
		backgroundColor: "#1e212d",
		color: "#f88f01",
	},
	link: {
		marginLeft: "1rem",
		marginRight: "3rem",
		fontWeight: "400",
		fontSize: "1.1rem",
		padding: "1.3rem 0.25rem",
	},
	menuItem: {
		backgroundColor: "#1e212d",
	},
}));

export default function Navbar() {
	const classes = useStyles();

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.nav}>
					<Typography variant="h5" className={classes.title}>
						Sriram Goparaju
					</Typography>
					{isMobile ? (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<MenuIcon fontSize="large" />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>
									<Button color="inherit" size="large">
										About
									</Button>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Button color="inherit" size="large">
										Project
									</Button>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Button color="inherit" size="large">
										Contact
									</Button>
								</MenuItem>
							</Menu>
						</div>
					) : (
						<div>
							<Button className={classes.link} color="inherit">
								About
							</Button>
							<Button className={classes.link} color="inherit">
								Projects
							</Button>
							<Button className={classes.link} color="inherit">
								Contact
							</Button>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
