import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import Button from "@material-ui/core/Button";

import image from "../images/background.jpg";

const useStyles = makeStyles((theme) => ({
	heroContainer: {
		width: "100vw",
		height: "88vh",
		backgroundImage: `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		position: "relative",
	},
	innerDiv: {
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		color: "#f88f01",
		alignItems: "center",
		textAlign: "center",
		position: "relative",
	},
	text: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: `translate(${-50}%, ${-50}%)`,
		zIndex: 2,
	},
	infoHead: {
		margin: 0,
		padding: 0,
		fontSize: "3.5rem",
		textTransform: "uppercase",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.5rem",
		},
	},
	typedText: {
		color: "white",
		fontSize: "2.1rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem",
		},
	},
	buttonsDiv: {
		display: "flex",
		justifyContent: "center",
		marginTop: "2rem",
	},
	button: {
		padding: "0.3rem 2.5rem",
		fontSize: "1.2rem",
		fontWeight: "500",
		margin: "1rem",
		backgroundColor: "#f88f01",
		[theme.breakpoints.down("sm")]: {
			padding: "0.2rem 2rem",
			fontSize: "1.1rem",
		},
	},
}));

function Hero() {
	const classes = useStyles();
	return (
		<div className={classes.heroContainer}>
			<div className={classes.innerDiv}>
				<div className={classes.text}>
					<h1 className={classes.infoHead}>I am Sriram Goparaju</h1>
					<Typed
						className={classes.typedText}
						strings={[
							"Full Stack Developer",
							"Website Design",
							"MERN Stack Developer",
							"Tech Enthusiast",
						]}
						typeSpeed={50}
						backSpeed={60}
						backDelay={30}
						loop
					/>
					<div className={classes.buttonsDiv}>
						<Button
							className={classes.button}
							variant="contained"
							color="secondary"
						>
							Resume
						</Button>
						<Button
							className={classes.button}
							variant="contained"
							color="secondary"
							href="https://github.com/SriramGoparaju"
							target="_blank"
						>
							GitHub
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
