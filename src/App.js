import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="App">
			<CssBaseline />
			<Particles
				params={{
					particles: {
						number: {
							value: 50,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: "square",
							stroke: {
								width: 6,
								color: "#f88f01",
							},
						},
					},
				}}
			/>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
