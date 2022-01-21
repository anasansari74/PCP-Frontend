import "./App.css";
import { useState } from "react";

function App() {

	const [quote, setQuote] = useState("Press the button below to generate a new quote")

	return (
		<div className="App">
			<header className="App-header">
				<h1>Positive Thought Generator</h1>
			</header>
			<main>
				<section className="thought-box">
					<p className="quote">
						{quote}
					</p>
				</section>
				<button
					onClick={(e) => {
						fetch("http://localhost:4000/quotes")
							.then(res=>res.json())
                            .then(data=>{
								setQuote(data[Math.floor(Math.random() * data.length)])
							})
					}}
				>
					Generate Thought
				</button>
			</main>
		</div>
	);
}

export default App;
