import styled from "styled-components";

// Please move to line 43 to skip the CSS

const PostThoughtSection = styled.div`
  section.post-thought form {
    display: grid;
    place-items: center;
    grid-gap: 2rem;
  }

  section.post-thought textarea {
    height: 8rem;
    width: 20rem;
    background-color: #f7f5f9;
    padding: 1rem;
    border: 3px solid #c9c6cc;
    border-radius: 20px;
  }

  section.post-thought {
    margin: 4rem;
  }

  .user-input {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1rem;
  }

  #thoughts {
    border-radius: 0;
    height: 40px;
    background-color: #2a9d8f;
    color: #fff;
  }

  button.post-thought-button {
    background-color: #2a9d8f;
  }
`;

export const PostThought = ({
  postedCategory,
  postThought,
  thoughtsURL,
  dispatch,
  postCategory,
  thoughtToPost,
  categories,
}) => {
  return (
    <PostThoughtSection>
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
          <textarea
            placeholder="Write your personal positive thought here..."
            type={"reset"}
            onChange={e => {
              dispatch(thoughtToPost(e.target.value));
            }}
          ></textarea>
          <div className="user-input">
            <select
              name="category to post"
              id="thoughts"
              value={postedCategory}
              // onChange={e => setPostCategory(e.target.value)}
              onChange={e => dispatch(postCategory(e.target.value))}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button className="post-thought-button" type="submit">
              Post Thought
            </button>
          </div>
        </form>
      </section>
    </PostThoughtSection>
  );
};
