import "./App.css";
import { useEffect, useState } from "react";

function App() {
	useEffect(() => {}, []);
	return (
		<div className="App">
			<header className="App-header">
				<h1>Positive Thought Generator</h1>
			</header>
			<main>
				<section className="thought-box">
					<p className="quote">
						"You are amazing. What goes by you isn't for you. YOLO"
					</p>
				</section>
				<button
					onClick={() => {
						fetch("https://zenquotes.io/api/quotes")
							.then((res) => {res => res.json()})
                            .then(console.log())
					}}
				>
					Generate Thought
				</button>
			</main>
		</div>
	);
}

export default App;
