import React from "react";

import env from "react-dotenv";

import "./App.css";

import { colors, categories } from "./lists";

import { useSelector, useDispatch } from "react-redux";
import {
  changeQuote,
  selectCategory,
  // postCategory,
  // thoughtToPost,
} from "./actions";

import { Category } from "./components/Category";

const thoughtsURL = `${env.API_URL}/thoughts`;

const categoriesURL = `${env.API_URL}/categories`;

function App() {
  const getThought = useSelector(state => state.getThought);
  const selectedCategory = useSelector(state => state.selectedCategory);
  // const postedCategory = useSelector((state) => state.postedCategory);
  // const postThought = useSelector((state) => state.postThought);

  const dispatch = useDispatch();

  const randomColorString = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="App">
      <header>
        <div className="space"></div>
        <h1>Positive Thought Generator</h1>
        <div className="login">Log in</div>
      </header>
      <main className="page-body">
        <Category
          selectedCategory={selectedCategory}
          selectCategory={selectCategory}
          dispatch={dispatch}
          categories={categories}
        />
        <section className="thought-area">
          <div className="thought-box">
            <div className="quote-wrapper">
              <img
                className="quote-marks"
                src="https://res.cloudinary.com/kymburley/image/upload/v1477068792/quotemarks_mh848a.png"
                alt="quote marks"
              ></img>

              <p className="quote">{getThought}</p>
            </div>
            <button
              className="quote-button"
              onClick={e => {
                fetch(
                  selectedCategory === "Random"
                    ? `${thoughtsURL}/random`
                    : `${categoriesURL}/random/${selectedCategory}`,
                  {
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                  }
                )
                  .then(res => res.json())
                  .then(data => {
                    dispatch(changeQuote(data.randomThought.thought));

                    document.querySelector(".App").style.backgroundColor =
                      randomColorString;
                  });
              }}
            >
              Generate Thought
            </button>
          </div>
        </section>

        {/* <section className="post-thought">
          <form
            onSubmit={(e) => {
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
                    .then((res) => res.json())
                    .then((data) => {
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
              onChange={(e) => dispatch(postCategory(e.target.value))}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Write your personal positive thought here..."
              type={"reset"}
              onChange={(e) => {
                dispatch(thoughtToPost(e.target.value));
              }}
            ></textarea>
            <button className="post-thought-button" type="submit">
              Post Thought
            </button>
          </form>
        </section> */}
      </main>
    </div>
  );
}

export default App;
