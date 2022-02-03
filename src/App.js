import "./App.css";
import { useState } from "react";

function App() {

	

    const colors = ["#E9C46A", "#F4A261","#E76F51", "#F5AA6F", "#8CC084", "#2F4550", "#828E82" ]

    const randomColorString = colors[Math.floor(Math.random()* colors.length)]

	const [quote, setQuote] = useState("Press the button below to generate a new quote")

	return (
		<div className="App">
			<header className="App-header">
				<h1>Positive Thought Generator</h1>
			</header>
			<main className="page-body">
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
								document.querySelector(".page-body").style.backgroundColor = randomColorString
							})
					}}
				>
					Generate Thought
				</button>
			
                <section className="post-thought">
                    <form >
						<select name="thoughts" id="thoughts" defaultValue={""}>
							<option value="" disabled>Select the category you feel fits your thought best</option>
							<option value="Health">Health</option>
							<option value="Uplifting">Uplifting</option>
							<option value="Career">Career</option>
							<option value="Motivation">Motivation</option>
							<option value="Relationships">Relationships</option>
							<option value="Wholesome">Wholesome</option>
							<option value="Relaxing">Relaxing</option>
							<option value="Comedic">Comedic</option>
							<option value="Happiness">Happiness</option>
							<option value="Insightful">Insightful</option>
						</select>
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
