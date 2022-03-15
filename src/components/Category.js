import styled from "styled-components";

const CategoryDiv = styled.div`
  width: 100vw;

  h3 {
    padding: 1rem;
    font-size: 2em;
    color: whitesmoke;
  }

  .all-categories {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem;
    margin: 0 4rem;
  }

  .each-category {
    border: 2px solid black;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 5px 10px grey;
    font-weight: bold;
  }

  .selected {
    background-color: black;
    color: white;
  }

  .not-selected:hover {
    transform: scale(1.1);
    background-color: whitesmoke;
  }

  @media only screen and (max-width: 400px) {
    .all-categories {
      display: grid;
    }
    .each-category {
      width: 100%;
    }
  }
`;

export const Category = ({
  selectedCategory,
  selectCategory,
  dispatch,
  categories,
}) => {
  return (
    <CategoryDiv>
      <h3>Would you like to choose a category?</h3>
      <div className="all-categories">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${
              category === selectedCategory
                ? "each-category selected"
                : "each-category not-selected"
            }`}
            onClick={() => dispatch(selectCategory(category))}
          >
            {category}
          </div>
        ))}
      </div>
    </CategoryDiv>
  );
};
