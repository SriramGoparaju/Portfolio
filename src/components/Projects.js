import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import sortingVisualiser from "../images/sorting-visualiser.png";
import blog from "../images/blog.png";
import ticTacToe from "../images/tic-tac-toe.png";
import remindMe from "../images/remind-me.png";

const useStyles = makeStyles((theme) => ({
	projectsSection: {
		width: "100vw",
		maxWidth: "100%",
		backgroundColor: "#0A0A10",
		margin: 0,
		paddingBottom: "5rem",
	},
	headTitle: {
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
	firstRow: {
		display: "flex",
		justifyContent: "space-evenly",
		marginTop: "4rem",
		[theme.breakpoints.down("sm")]: {
			display: "block",
		},
	},
	secondRow: {
		display: "flex",
		justifyContent: "space-evenly",
		marginTop: "6rem",
		[theme.breakpoints.down("sm")]: {
			display: "block",
			marginTop: "3rem",
		},
	},
	card: {
		width: "40%",
		alignContent: "center",
		padding: 0,
		[theme.breakpoints.down("sm")]: {
			width: "80%",
			margin: "auto",
			marginTop: "4rem",
			marginBotton: "2rem",
		},
	},
	title: {
		backgroundColor: "#f88f01",
		color: "black",
		textAlign: "center",
		fontSize: "1.7rem",
		padding: "0.6rem",
		margin: "0",
	},
	image: {
		width: "100%",
	},
	description: {
		color: "white",
		fontSize: "1.1rem",
		padding: "0 0.75rem",
		textAlign: "center",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
			padding: "0.1rem",
		},
	},
	buttons: {
		display: "flex",
		justifyContent: "space-evenly",
	},
	button: {
		color: "#f88f01",
		borderColor: "#f88f01",
		"&:hover": {
			backgroundColor: "#f88f01",
			color: "black",
			borderColor: "#f88f01",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.7rem",
		},
	},
}));

function Projects() {
	const classes = useStyles();
	return (
		<div className={classes.projectsSection}>
			<h1 className={classes.headTitle}>My Projects</h1>
			<div className={classes.container}>
				<div className={classes.firstRow}>
					<div className={classes.card}>
						<h3 className={classes.title}>Sorting Visualiser</h3>
						<img
							className={classes.image}
							src={sortingVisualiser}
							alt="sorting visualiser"
						/>
						<p className={classes.description}>
							Sorting Visualizer is a website where you can
							visualize sorting algorithms. Initially, it was
							tough for me to understand how divide-and-conquer
							algorithms like merge sort and quicksort worked. It
							motivated me to build this website which facilitates
							understanding the algorithm visually.
						</p>
						<div className={classes.buttons}>
							<Button
								href="https://sharp-pike-d0dd89.netlify.app/"
								target="_blank"
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								View Website
							</Button>
							<Button
								href="https://github.com/SriramGoparaju/Sorting-Visualiser"
								target="_blank"
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								Source Code
							</Button>
						</div>
					</div>

					<div className={classes.card}>
						<h3 className={classes.title}>Remind Me</h3>
						<img
							className={classes.image}
							src={remindMe}
							alt="remind me"
						/>
						<p className={classes.description}>
							Using Remind Me, you can save your upcoming events
							and receive a reminder e-mail. This website utilizes
							authentication and authorization to identify its
							users and send them e-mails to remind them of their
							events. You can log in to view countdowns to all
							your events as well.
						</p>
						<div className={classes.buttons}>
							<Button
								href="https://adoring-mccarthy-6d0e19.netlify.app/"
								target="_blank"
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								View Website
							</Button>
							<Button
								href="https://github.com/SriramGoparaju/remindMe"
								target="_blank"
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								Source Code
							</Button>
						</div>
					</div>
				</div>

				<div className={classes.secondRow}>
					<div className={classes.card}>
						<h3 className={classes.title}>Code Blog</h3>
						<img className={classes.image} src={blog} alt="blog" />
						<p className={classes.description}>
							Code Blog is a blog website built and maintained by
							me. I write about technology-related topics and
							competitive programming. It has a simplistic design
							and minimal styling, which was done using Material
							UI.
						</p>
						<div className={classes.buttons}>
							<Button
								href="https://relaxed-mahavira-099e8a.netlify.app/"
								target="_blank"
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								View Website
							</Button>
							<Button
								href="https://github.com/SriramGoparaju/Blog"
								target="_blank"
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								Source Code
							</Button>
						</div>
					</div>

					<div className={classes.card}>
						<h3 className={classes.title}>
							Tic-tac-toe with Sockets
						</h3>
						<img
							className={classes.image}
							src={ticTacToe}
							alt="tic tac toe"
						/>
						<p className={classes.description}>
							This website lets users create a room and invite
							their friends to play tic-tac-toe online. Players
							can chat with each other while they play. The game
							and chat were developed using Sockets.
						</p>
						<div className={classes.buttons}>
							<Button
								href="https://vast-thicket-30587.herokuapp.com/"
								target="_blank"
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								View Website
							</Button>
							<Button
								href="https://github.com/SriramGoparaju/Tic-Tac-Toe-Socket-and-Chat"
								target="_blank"
								variant="outlined"
								color="primary"
								className={classes.button}
							>
								Source Code
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
