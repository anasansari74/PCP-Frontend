import styled from "styled-components";

const ThoughtAreaSection = styled.div`
  display: grid;
  width: 100vw;
  place-items: center;

  button.quote-button {
    width: 9rem;
    background-color: #264653;
    border: none;
    border-radius: 5px;
    color: #f8f1ff;
    height: 3rem;
    align-self: baseline;
    display: block;
    justify-self: right;
    align-self: end;
    font-family: "Open Sans Condensed", sans-serif;
    box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  button.quote-button:hover {
    background-color: whitesmoke;
    color: #264653;
    border: solid 1px #264653;
  }

  div.quote-wrapper {
    display: grid;
  }

  div.thought-box {
    display: grid;
    background-color: #f7f5f9;
    padding: 2rem 5rem 2rem 5rem;
    border: 3px solid #c9c6cc;
    border-radius: 20px;
    margin: 1rem;
    font-style: italic;
    gap: 3rem;
    width: 60vw;
    box-shadow: grey 10px 10px 15px;
  }

  img.quote-marks {
    width: 100px;
    justify-self: start;
    transform: translate(-50%, -25%);
  }

  p.quote {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 900px) {
    div.thought-box {
      width: 90vw;
    }
  }
`;

export const ThoughtArea = ({
  getThought,
  selectedCategory,
  thoughtsURL,
  categoriesURL,
  dispatch,
  changeQuote,
  randomColorString,
}) => {
  return (
    <ThoughtAreaSection>
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
            onClick={(e) => {
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
                .then((res) => res.json())
                .then((data) => {
                  dispatch(changeQuote(data.randomThought.thought));

                  document.querySelector("body").style.backgroundColor =
                    randomColorString;
                });
            }}
          >
            Generate Thought
          </button>
        </div>
      </section>
    </ThoughtAreaSection>
  );
};
