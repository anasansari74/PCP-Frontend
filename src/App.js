import "./App.css";
import { useEffect, useState } from "react";

function App() {
	useEffect(() => {}, []);
    const colors = ["#E9C46A", "#F4A261","#E76F51", "#F5AA6F", "#8CC084", "#2F4550", "#828E82" ]

    const randomColorString = colors[Math.floor(Math.random()* colors.length)]

    const [bgColor, setBgcolor] = useState(randomColorString)
	return (
		<div className="App">
			<header className="App-header">
				<h1>Positive Thought Generator</h1>
			</header>
			<main>
				<section>
                    <div className="thought-box">
                    <p className="quote">
						"You are amazing. What goes by you isn't for you. YOLO"
					</p>
                    </div>
					
                    <button
					onClick={() => {
						fetch("https://zenquotes.io/api/quotes")
							.then((res) => {res.json()})
                            .then(console.log())
					}}
				>
					Generate Thought
				</button>
				</section>
			
                <section className="post-thought">
                    <form >
                        <textarea placeholder="Write your personal positive thought here..."></textarea>
                        <button className="alternate" type="submit">
                            Post Thought
                        </button>
                    </form>
                </section>
			</main>
		</div>
	);
}

export default App;
