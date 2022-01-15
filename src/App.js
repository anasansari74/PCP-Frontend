import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
                <h1>Positive Thought Generator</h1>
            </header>
			<main>
				<section className="thought-box">
					<p>You are amazing. What goes by you isn't for you. YOLO</p>
				</section>
				<button>Generate Thought</button>
			</main>
		</div>
	);
}

export default App;
