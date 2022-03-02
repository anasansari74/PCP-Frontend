import reducer, { selectedCategory } from "./reducers/selectedCategory";

test("check that category is selected or random", () => {
  expect(reducer(undefined, selectedCategory("Health")).value).toEqual(
    "Health"
  );
});
