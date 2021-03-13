import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import about from "../images/aboutSection.svg";

const useStyles = makeStyles((theme) => ({
	aboutSection: {
		width: "100vw",
		maxWidth: "100%",
		backgroundColor: "#1E212D",
		margin: 0,
		paddingBottom: "4rem",
	},
	title: {
		color: "#f88f01",
		textAlign: "center",
		margin: 0,
		paddingTop: "2rem",
		fontSize: "2rem",
		[theme.breakpoints.down("md")]: {
			paddingTop: "1.5rem",
			paddingBottom: "0",
		},
	},
	mainContainer: {
		display: "flex",
		marginTop: "2rem",
		[theme.breakpoints.down("md")]: {
			display: "block",
			marginTop: "0rem",
		},
	},
	imageContainer: {
		width: "40%",
		position: "relative",
		height: "50vh",
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	},
	image: {
		maxWidth: "80%",
		maxHeight: "90%",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: `translate(${-50}%, ${-50}%)`,
		[theme.breakpoints.down("md")]: {
			maxWidth: "60%",
		},
		[theme.breakpoints.down("sm")]: {
			maxWidth: "85%",
		},
	},
	textContainer: {
		width: "60%",
		color: "white",
		fontSize: "1.35rem",
		padding: "2rem 3rem 2rem 0rem",
		textAlign: "center",
		lineHeight: "2.3rem",
		[theme.breakpoints.down("md")]: {
			width: "100%",
			padding: "0 1rem",
			fontSize: "1rem",
		},
	},
}));

function About() {
	const classes = useStyles();

	return (
		<div className={classes.aboutSection}>
			<h1 id="about" className={classes.title}>About Me</h1>
			<div className={classes.mainContainer}>
				<div className={classes.imageContainer}>
					<img className={classes.image} src={about} alt="working" />
				</div>
				<div className={classes.textContainer}>
					Hello, I am Sriram Goparaju, nice to meet you. I am a
					self-taught full-stack web developer based in Hyderabad,
					India. Also, I am a Mechanical Engineering graduate passed
					out in the year 2020. During the final year of my bachelor's
					degree, I was introduced to Web Development and have loved
					it ever since. Since then, employing the internet, I have
					taught myself to build simple and elegant websites. I have
					worked with React JS, Vanilla JavaScript, HTML, CSS,
					Material UI on the front end. I also have hands-on
					experience with back-end technologies like Node JS with
					Express JS, GraphQL with Apollo, and databases using
					MongoDB. I enjoy learning new things and am passionate about
					technology.
				</div>
			</div>
		</div>
	);
}

export default About;
