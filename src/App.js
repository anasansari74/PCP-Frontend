import "./App.css";
import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeQuote,
  selectCategory,
  postCategory,
  thoughtToPost,
} from "./actions";

// import { changeQuote } from "./reducers/getThought";
// import { selectedCategory } from "./reducers/selectedCategory";

const thoughtsURL = "http://localhost:3030/thoughts";
const categoriesURL = "http://localhost:3030/categories";

function App() {
  //All states

  const getThought = useSelector(state => state.getThought);
  const selectedCategory = useSelector(state => state.selectedCategory);
  const postedCategory = useSelector(state => state.postedCategory);
  const postThought = useSelector(state => state.postThought);

  const dispatch = useDispatch();

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Positive Thought Generator</h1>
      </header>
      <main className="page-body">
        <section>
          <p className="thought-box">{getThought}</p>

          <select
            name={"category"}
            value={selectedCategory}
            onChange={e => {
              dispatch(selectCategory(e.target.value));
            }}
          >
            <option value="Random">Random</option>
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
          <button
            onClick={e => {
              fetch(
                selectedCategory === "Random"
                  ? `${thoughtsURL}/random`
                  : `${categoriesURL}/random/${selectedCategory}`
              )
                .then(res => res.json())
                .then(data => {
                  dispatch(changeQuote(data.randomThought.thought));

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

              postedCategory === "" || postThought === ""
                ? alert("You are missing a category/thought")
                : fetch(`${thoughtsURL}/`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      categoryTitle: postedCategory.toLowerCase(),
                      thought: postThought,
                    }),
                  })
                    .then(res => res.json())
                    .then(data => {
                      alert("Thought posted successfully!");
                    });
              dispatch(postCategory("Random"));
              dispatch(thoughtToPost(""));
            }}
          >
            <select
              name="category to post"
              id="thoughts"
              value={postedCategory}
              // onChange={e => setPostCategory(e.target.value)}
              onChange={e => dispatch(postCategory(e.target.value))}
            >
              <option value="Random">Random</option>
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
              type={"reset"}
              onChange={e => {
                dispatch(thoughtToPost(e.target.value));
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
