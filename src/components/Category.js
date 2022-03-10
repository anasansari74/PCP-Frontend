import styled from "styled-components";

const CategoryDiv = styled.div`
  h3 {
    padding: 1rem;
  }

  .all-categories {
    // display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(auto, 100px));
    // place-items: center;
    // padding: 1rem;
    // width: 80vw;
    // justify-content: space-between;

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
  }

  .selected {
    background-color: black;
    color: white;
    font-weight: bold;
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
            //This bug was fixed
            className={`${
              category === selectedCategory
                ? "each-category selected"
                : "each-category"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </CategoryDiv>
  );
};
