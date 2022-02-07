import "./App.css";
import { useState } from "react";

const thoughtsURL = "http://localhost:3030/thoughts";
const categoriesURL = "http://localhost:3030/categories";

function App() {
  const colors = [
    "#E9C46A",
    "#F4A261",
    "#E76F51",
    "#F5AA6F",
    "#8CC084",
    "#2F4550",
    "#828E82",
  ];

  const randomColorString = colors[Math.floor(Math.random() * colors.length)];

  const [quote, setQuote] = useState(
    "Press the button below to generate a new quote"
  );

  const [category, setCategory] = useState("");

  const [postCategory, setPostCategory] = useState("");

  const [thoughtToPost, setThoughtToPost] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Positive Thought Generator</h1>
      </header>
      <main className="page-body">
        <section>
          <p className="thought-box">{quote}</p>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="" disabled>
              Select the category you feel fits your thought best
            </option>
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
            <option value="Random">Random</option>
          </select>
          <button
            onClick={e => {
              fetch(
                category === ""
                  ? `${thoughtsURL}/random`
                  : `${categoriesURL}/random/${category}`
              )
                .then(res => res.json())
                .then(data => {
                  setQuote(data.randomThought.thought);

                  document.querySelector(".page-body").style.backgroundColor =
                    randomColorString;
                });
            }}
          >
            Generate Thought
          </button>
        </section>

        <section className="post-thought">
          <form
            onSubmit={e => {
              e.preventDefault();

              postCategory === "" || thoughtToPost === ""
                ? alert("You are missing a category/thought")
                : fetch(`${thoughtsURL}/`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      categoryTitle: postCategory.toLowerCase(),
                      thought: thoughtToPost,
                    }),
                  })
                    .then(res => res.json())
                    .then(data => console.log(data.msg));
            }}
          >
            <select
              name="thoughts"
              id="thoughts"
              defaultValue={""}
              onChange={e => setPostCategory(e.target.value)}
            >
              <option value="" disabled>
                Select the category you feel fits your thought best
              </option>
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
            <textarea
              placeholder="Write your personal positive thought here..."
              onChange={e => {
                setThoughtToPost(e.target.value);
              }}
            ></textarea>
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
