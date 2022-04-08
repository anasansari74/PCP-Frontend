import { useState } from "react";

import env from "react-dotenv";

import "./App.css";

import { colors, categories } from "./lists";

import { useSelector, useDispatch } from "react-redux";
import {
  changeQuote,
  // postCategory,
  selectCategory,
  // thoughtToPost,
} from "./actions";

import { Category } from "./components/Category";
import { Header } from "./components/Header";
import { ThoughtArea } from "./components/ThoughtArea";
// import { PostThought } from "./components/PostThought";

const thoughtsURL = `${env.API_URL}/thoughts`;

const categoriesURL = `${env.API_URL}/categories`;

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");




  const getThought = useSelector((state) => state.getThought);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  // const postedCategory = useSelector((state) => state.postedCategory);
  // const postThought = useSelector((state) => state.postThought);

  const dispatch = useDispatch();

  const randomColorString = colors[Math.floor(Math.random() * colors.length)];


  return (
    <div className="App">
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <main className="page-body">
        <Category
          selectedCategory={selectedCategory}
          selectCategory={selectCategory}
          dispatch={dispatch}
          categories={categories}
        />
        <ThoughtArea
          getThought={getThought}
          selectedCategory={selectedCategory}
          thoughtsURL={thoughtsURL}
          categoriesURL={categoriesURL}
          dispatch={dispatch}
          changeQuote={changeQuote}
          randomColorString={randomColorString}
        />
        {/* <PostThought
          postedCategory={postedCategory}
          postThought={postThought}
          thoughtsURL={thoughtsURL}
          dispatch={dispatch}
          postCategory={postCategory}
          thoughtToPost={thoughtToPost}
          categories={categories}
        /> */}
      </main>
    </div>
  );
}

export default App;
