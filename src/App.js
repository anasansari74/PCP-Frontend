import "./App.css";
import { useState } from "react";

function App() {
    const colors = ["#E9C46A", "#F4A261","#E76F51", "#F5AA6F", "#8CC084", "#2F4550", "#828E82" ]

    const randomColorString = colors[Math.floor(Math.random()* colors.length)]

    const [bgColor, setBgcolor] = useState(randomColorString)

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
